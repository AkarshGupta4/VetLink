const Prescription = require('../models/Prescription');

exports.createPrescription = async (req, res) => {
  try {
    const prescriptionData = {
      ...req.body,
      prescribedBy: req.user._id
    };

    if (req.file) {
      prescriptionData.conditionImage = req.file.path;
    }

    const prescription = new Prescription(prescriptionData);
    await prescription.save();

    res.status(201).json({ message: 'Prescription created successfully', prescription });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find()
      .populate('prescribedBy', 'fullName')
      .sort({ createdAt: -1 });

    res.json(prescriptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAnimalPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find({ 
      animalId: req.params.animalId 
    }).populate('prescribedBy', 'fullName');

    res.json(prescriptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPrescriptionById = async (req, res) => {
  try {
    const prescription = await Prescription.findById(req.params.id)
      .populate('prescribedBy', 'fullName phone');

    if (!prescription) {
      return res.status(404).json({ message: 'Prescription not found' });
    }

    res.json(prescription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};