const Treatment = require('../models/Treatment');

exports.createTreatment = async (req, res) => {
  try {
    const treatment = new Treatment({
      ...req.body,
      prescribedBy: req.user._id
    });

    await treatment.save();
    res.status(201).json({ message: 'Treatment recorded successfully', treatment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTreatments = async (req, res) => {
  try {
    const treatments = await Treatment.find().populate('prescribedBy', 'fullName');
    res.json(treatments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAnimalTreatments = async (req, res) => {
  try {
    const treatments = await Treatment.find({ 
      animalId: req.params.animalId 
    }).populate('prescribedBy', 'fullName');
    
    res.json(treatments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTreatment = async (req, res) => {
  try {
    const treatment = await Treatment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!treatment) {
      return res.status(404).json({ message: 'Treatment not found' });
    }

    res.json({ message: 'Treatment updated successfully', treatment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};