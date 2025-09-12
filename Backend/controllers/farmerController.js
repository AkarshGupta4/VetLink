const Animal = require('../models/Animal');
const Complaint = require('../models/Complaint');
const Treatment = require('../models/Treatment');

exports.getFarmerDashboard = async (req, res) => {
  try {
    const [animals, complaints, treatments] = await Promise.all([
      Animal.countDocuments({ owner: req.user._id }),
      Complaint.countDocuments({ submittedBy: req.user._id, status: 'Pending' }),
      Treatment.countDocuments({ animalId: { $in: await getAnimalIds(req.user._id) } })
    ]);

    res.json({
      stats: {
        totalAnimals: animals,
        pendingComplaints: complaints,
        totalTreatments: treatments
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAnimalIds = async (ownerId) => {
  const animals = await Animal.find({ owner: ownerId }).select('animalId');
  return animals.map(animal => animal.animalId);
};

exports.getMyAnimals = async (req, res) => {
  try {
    const animals = await Animal.find({ owner: req.user._id });
    res.json(animals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAnimalDetails = async (req, res) => {
  try {
    const animal = await Animal.findOne({ 
      _id: req.params.id, 
      owner: req.user._id 
    });

    if (!animal) {
      return res.status(404).json({ message: 'Animal not found' });
    }

    res.json(animal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyReports = async (req, res) => {
  try {
    const animalIds = await getAnimalIds(req.user._id);
    const treatments = await Treatment.find({ animalId: { $in: animalIds } });

    res.json(treatments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({ submittedBy: req.user._id });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};