const MedicalRecord = require('../models/MedicalRecord');

exports.createMedicalRecord = async (req, res) => {
  try {
    const medicalRecord = new MedicalRecord(req.body);
    await medicalRecord.save();

    res.status(201).json({ message: 'Medical record created successfully', medicalRecord });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMedicalRecords = async (req, res) => {
  try {
    const medicalRecords = await MedicalRecord.find().sort({ createdAt: -1 });
    res.json(medicalRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAnimalMedicalRecord = async (req, res) => {
  try {
    const medicalRecord = await MedicalRecord.findOne({ 
      animalId: req.params.animalId 
    });

    if (!medicalRecord) {
      return res.status(404).json({ message: 'Medical record not found' });
    }

    res.json(medicalRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addVisit = async (req, res) => {
  try {
    const medicalRecord = await MedicalRecord.findById(req.params.id);

    if (!medicalRecord) {
      return res.status(404).json({ message: 'Medical record not found' });
    }

    medicalRecord.visits.push(req.body);
    await medicalRecord.save();

    res.json({ message: 'Visit added successfully', medicalRecord });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMedicalRecordById = async (req, res) => {
  try {
    const medicalRecord = await MedicalRecord.findById(req.params.id);

    if (!medicalRecord) {
      return res.status(404).json({ message: 'Medical record not found' });
    }

    res.json(medicalRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};