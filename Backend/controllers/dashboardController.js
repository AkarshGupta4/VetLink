const Animal = require('../models/Animal');
const Treatment = require('../models/Treatment');
const Complaint = require('../models/Complaint');
const Appointment = require('../models/Appointment');

exports.getDashboardStats = async (req, res) => {
  try {
    const stats = {
      totalAnimals: await Animal.countDocuments(),
      upcomingAppointments: await Appointment.countDocuments({ status: 'Pending' }),
      pendingComplaints: await Complaint.countDocuments({ status: 'Pending' }),
      completedTreatments: await Treatment.countDocuments()
    };

    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getHealthTrends = async (req, res) => {
  try {
    const healthData = [
      { month: "Jan", healthy: 80, sick: 20 },
      { month: "Feb", healthy: 85, sick: 15 },
      { month: "Mar", healthy: 78, sick: 22 },
      { month: "Apr", healthy: 90, sick: 10 },
      { month: "May", healthy: 88, sick: 12 },
      { month: "Jun", healthy: 92, sick: 8 },
    ];

    res.json(healthData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRevenueData = async (req, res) => {
  try {
    const revenueData = [
      { month: "Jan", value: 4000 },
      { month: "Feb", value: 6000 },
      { month: "Mar", value: 6500 },
      { month: "Apr", value: 5000 },
      { month: "May", value: 7800 },
      { month: "Jun", value: 4200 },
      { month: "Jul", value: 5600 },
      { month: "Aug", value: 7200 },
    ];

    res.json(revenueData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};