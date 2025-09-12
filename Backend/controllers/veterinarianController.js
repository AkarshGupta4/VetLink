const Appointment = require('../models/Appointment');
const MedicalRecord = require('../models/MedicalRecord');
const Prescription = require('../models/Prescription');
const Animal = require('../models/Animal');

exports.getVetDashboard = async (req, res) => {
  try {
    const [appointments, patients, prescriptions] = await Promise.all([
      Appointment.countDocuments({ 'veterinarian.id': req.user._id, status: 'Pending' }),
      Animal.countDocuments(),
      Prescription.countDocuments({ prescribedBy: req.user._id })
    ]);

    res.json({
      stats: {
        upcomingAppointments: appointments,
        activePatients: patients,
        totalPrescriptions: prescriptions
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyPatients = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ 
      'veterinarian.id': req.user._id 
    }).populate('farmer.id', 'fullName phone');

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTodayAppointments = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const appointments = await Appointment.find({
      'veterinarian.id': req.user._id,
      date: { $gte: today }
    }).populate('farmer.id', 'fullName phone');

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMedicalRecords = async (req, res) => {
  try {
    const medicalRecords = await MedicalRecord.find();
    res.json(medicalRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addPrescription = async (req, res) => {
  try {
    const prescription = new Prescription({
      ...req.body,
      prescribedBy: req.user._id
    });

    await prescription.save();
    res.status(201).json({ message: 'Prescription added successfully', prescription });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};