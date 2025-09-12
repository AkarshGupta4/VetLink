const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

exports.register = async (req, res) => {
  try {
    const { fullName, email, password, role, phone, farmRegNo, address } = req.body;

    console.log('Registration attempt:', { fullName, email, phone, role });

    // Validation - phone is now required
    if (!fullName || !email || !password || !role || !phone) {
      return res.status(400).json({ 
        message: 'Please provide all required fields: fullName, email, password, role, phone' 
      });
    }

    // Phone validation - 10 digits only
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        message: 'Please provide a valid 10-digit phone number'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: 'Please provide a valid email address'
      });
    }

    // Check if user already exists with email or phone
    const existingUser = await User.findOne({ 
      $or: [{ email: email.toLowerCase() }, { phone }] 
    });
    
    if (existingUser) {
      if (existingUser.email === email.toLowerCase()) {
        return res.status(400).json({ 
          message: 'User already exists with this email' 
        });
      }
      if (existingUser.phone === phone) {
        return res.status(400).json({ 
          message: 'User already exists with this phone number' 
        });
      }
    }

    // Create new user
    const user = new User({
      fullName: fullName.trim(),
      email: email.toLowerCase().trim(),
      password,
      role,
      phone: phone.trim(),
      farmRegNo: role === 'farmer' ? (farmRegNo || '').trim() : '',
      address: (address || '').trim()
    });

    await user.save();
    console.log('User created successfully:', user.email);

    // Generate token
    const token = generateToken(user._id);

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        farmRegNo: user.farmRegNo,
        address: user.address
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    
    // MongoDB duplicate key error
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      if (field === 'email') {
        return res.status(400).json({ 
          message: 'User already exists with this email' 
        });
      }
      if (field === 'phone') {
        return res.status(400).json({ 
          message: 'User already exists with this phone number' 
        });
      }
    }

    // Validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors 
      });
    }

    res.status(500).json({ 
      message: 'Internal server error during registration: ' + error.message 
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log('Login attempt:', { email });

    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required'
      });
    }

    // Find user by email (case insensitive)
    const user = await User.findOne({ 
      email: email.toLowerCase().trim() 
    });
    
    if (!user) {
      return res.status(401).json({ 
        message: 'Invalid email or password' 
      });
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(401).json({
        message: 'Account is deactivated. Please contact administrator.'
      });
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ 
        message: 'Invalid email or password' 
      });
    }

    // Generate token
    const token = generateToken(user._id);

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        farmRegNo: user.farmRegNo,
        address: user.address,
        profilePic: user.profilePic
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      message: 'Internal server error during login: ' + error.message 
    });
  }
};

exports.logout = async (req, res) => {
  try {
    // Here you can add token blacklisting if needed
    // For now, just clear the token on client side
    res.json({ 
      message: 'Logout successful',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ 
      message: 'Internal server error during logout: ' + error.message 
    });
  }
};

exports.getMe = async (req, res) => {
  try {
    // Check if user is authenticated
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ 
        message: 'Access denied. No token provided.' 
      });
    }

    // Verify token and get user
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-password');
    
    if (!user) {
      return res.status(404).json({ 
        message: 'User not found' 
      });
    }

    res.json({
      message: 'User profile fetched successfully',
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        farmRegNo: user.farmRegNo,
        address: user.address,
        profilePic: user.profilePic,
        isActive: user.isActive,
        createdAt: user.createdAt
      }
    });

  } catch (error) {
    console.error('Get me error:', error);
    
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ 
        message: 'Invalid token' 
      });
    }
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        message: 'Token expired' 
      });
    }

    res.status(500).json({ 
      message: 'Internal server error: ' + error.message 
    });
  }
};

// Additional utility function
exports.checkEmail = async (req, res) => {
  try {
    const { email } = req.query;
    
    if (!email) {
      return res.status(400).json({
        message: 'Email parameter is required'
      });
    }

    const existingUser = await User.findOne({ 
      email: email.toLowerCase().trim() 
    });

    res.json({
      available: !existingUser,
      message: existingUser ? 'Email already taken' : 'Email available'
    });

  } catch (error) {
    console.error('Check email error:', error);
    res.status(500).json({ 
      message: 'Internal server error: ' + error.message 
    });
  }
};

exports.checkPhone = async (req, res) => {
  try {
    const { phone } = req.query;
    
    if (!phone) {
      return res.status(400).json({
        message: 'Phone parameter is required'
      });
    }

    const existingUser = await User.findOne({ phone: phone.trim() });

    res.json({
      available: !existingUser,
      message: existingUser ? 'Phone number already registered' : 'Phone number available'
    });

  } catch (error) {
    console.error('Check phone error:', error);
    res.status(500).json({ 
      message: 'Internal server error: ' + error.message 
    });
  }
};