const User = require('../models/User');
const Animal = require('../models/Animal');
const Complaint = require('../models/Complaint');
const Treatment = require('../models/Treatment');

exports.getAdminDashboard = async (req, res) => {
  try {
    const [users, animals, complaints, treatments] = await Promise.all([
      User.countDocuments(),
      Animal.countDocuments(),
      Complaint.countDocuments({ status: 'Pending' }),
      Treatment.countDocuments()
    ]);

    res.json({
      stats: {
        totalUsers: users,
        totalAnimals: animals,
        pendingComplaints: complaints,
        totalTreatments: treatments
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUsersByRole = async (req, res) => {
  try {
    const users = await User.find({ role: req.params.role }).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUserStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { isActive: status === 'active' },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User status updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSystemOverview = async (req, res) => {
  try {
    const [farmers, veterinarians, admins] = await Promise.all([
      User.countDocuments({ role: 'farmer' }),
      User.countDocuments({ role: 'veterinarian' }),
      User.countDocuments({ role: 'admin' })
    ]);

    res.json({
      totalFarmers: farmers,
      totalVeterinarians: veterinarians,
      totalAdmins: admins
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSystemReports = async (req, res) => {
  try {
    const [complaints, treatments, appointments] = await Promise.all([
      Complaint.find().populate('submittedBy', 'fullName'),
      Treatment.find().populate('prescribedBy', 'fullName'),
      Appointment.find().populate('farmer.id', 'fullName')
    ]);

    res.json({
      complaints,
      treatments,
      appointments
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};