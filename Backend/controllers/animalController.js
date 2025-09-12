const Animal = require('../models/Animal');

exports.createAnimal = async (req, res) => {
  try {
    const { animalId, type, breed, age, gender, weight, healthStatus, vaccination, farmRegNo, contact } = req.body;

    console.log('Animal registration attempt:', { animalId, type, farmer: req.user._id });

    // Validation
    if (!animalId || !type || !farmRegNo || !contact) {
      return res.status(400).json({ 
        message: 'Please provide all required fields: animalId, type, farmRegNo, contact' 
      });
    }

    // Check if animal already exists
    const existingAnimal = await Animal.findOne({ 
      $or: [{ animalId }, { farmRegNo, animalId }] 
    });
    
    if (existingAnimal) {
      return res.status(400).json({ 
        message: 'Animal with this ID already exists in your farm' 
      });
    }

    // Create new animal
    const animal = new Animal({
      animalId: animalId.trim(),
      type,
      breed: breed || '',
      age: age || '',
      gender: gender || '',
      weight: weight || 0,
      healthStatus: healthStatus || 'Healthy',
      vaccination: vaccination || '',
      owner: req.user._id,
      ownerName: req.user.fullName,
      farmRegNo: farmRegNo.trim(),
      contact: contact.trim(),
      image: req.file ? req.file.path : ''
    });

    await animal.save();
    console.log('Animal registered successfully:', animalId);

    res.status(201).json({
      message: 'Animal registered successfully',
      animal: {
        id: animal._id,
        animalId: animal.animalId,
        type: animal.type,
        breed: animal.breed,
        age: animal.age,
        gender: animal.gender,
        weight: animal.weight,
        healthStatus: animal.healthStatus,
        vaccination: animal.vaccination,
        farmRegNo: animal.farmRegNo,
        contact: animal.contact,
        image: animal.image
      }
    });

  } catch (error) {
    console.error('Animal registration error:', error);
    
    if (error.code === 11000) {
      return res.status(400).json({ 
        message: 'Animal with this ID already exists' 
      });
    }

    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors 
      });
    }

    res.status(500).json({ 
      message: 'Internal server error during animal registration' 
    });
  }
};

exports.getAnimals = async (req, res) => {
  try {
    const animals = await Animal.find({ owner: req.user._id }).sort({ createdAt: -1 });
    
    res.json({
      message: 'Animals fetched successfully',
      animals: animals.map(animal => ({
        id: animal._id,
        animalId: animal.animalId,
        type: animal.type,
        breed: animal.breed,
        age: animal.age,
        gender: animal.gender,
        weight: animal.weight,
        healthStatus: animal.healthStatus,
        vaccination: animal.vaccination,
        farmRegNo: animal.farmRegNo,
        contact: animal.contact,
        image: animal.image,
        createdAt: animal.createdAt
      }))
    });

  } catch (error) {
    console.error('Get animals error:', error);
    res.status(500).json({ 
      message: 'Internal server error' 
    });
  }
};

exports.getAnimalById = async (req, res) => {
  try {
    const animal = await Animal.findOne({ 
      _id: req.params.id, 
      owner: req.user._id 
    });
    
    if (!animal) {
      return res.status(404).json({ 
        message: 'Animal not found' 
      });
    }

    res.json({
      message: 'Animal fetched successfully',
      animal: {
        id: animal._id,
        animalId: animal.animalId,
        type: animal.type,
        breed: animal.breed,
        age: animal.age,
        gender: animal.gender,
        weight: animal.weight,
        healthStatus: animal.healthStatus,
        vaccination: animal.vaccination,
        farmRegNo: animal.farmRegNo,
        contact: animal.contact,
        image: animal.image,
        createdAt: animal.createdAt
      }
    });

  } catch (error) {
    console.error('Get animal error:', error);
    res.status(500).json({ 
      message: 'Internal server error' 
    });
  }
};

exports.getFarmerAnimals = async (req, res) => {
  try {
    const animals = await Animal.find({ owner: req.params.farmerId }).sort({ createdAt: -1 });
    
    res.json({
      message: 'Farmer animals fetched successfully',
      animals: animals.map(animal => ({
        id: animal._id,
        animalId: animal.animalId,
        type: animal.type,
        breed: animal.breed,
        age: animal.age,
        gender: animal.gender,
        healthStatus: animal.healthStatus,
        createdAt: animal.createdAt
      }))
    });

  } catch (error) {
    console.error('Get farmer animals error:', error);
    res.status(500).json({ 
      message: 'Internal server error' 
    });
  }
};

exports.updateAnimal = async (req, res) => {
  try {
    const updates = { ...req.body };
    
    if (req.file) {
      updates.image = req.file.path;
    }

    const animal = await Animal.findOneAndUpdate(
      { _id: req.params.id, owner: req.user._id },
      updates,
      { new: true, runValidators: true }
    );

    if (!animal) {
      return res.status(404).json({ 
        message: 'Animal not found' 
      });
    }

    res.json({
      message: 'Animal updated successfully',
      animal: {
        id: animal._id,
        animalId: animal.animalId,
        type: animal.type,
        breed: animal.breed,
        age: animal.age,
        gender: animal.gender,
        weight: animal.weight,
        healthStatus: animal.healthStatus,
        vaccination: animal.vaccination,
        farmRegNo: animal.farmRegNo,
        contact: animal.contact,
        image: animal.image
      }
    });

  } catch (error) {
    console.error('Update animal error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors 
      });
    }

    res.status(500).json({ 
      message: 'Internal server error' 
    });
  }
};

exports.deleteAnimal = async (req, res) => {
  try {
    const animal = await Animal.findOneAndDelete({ 
      _id: req.params.id, 
      owner: req.user._id 
    });

    if (!animal) {
      return res.status(404).json({ 
        message: 'Animal not found' 
      });
    }

    res.json({ 
      message: 'Animal deleted successfully' 
    });

  } catch (error) {
    console.error('Delete animal error:', error);
    res.status(500).json({ 
      message: 'Internal server error' 
    });
  }
};