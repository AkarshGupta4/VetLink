const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
  animalId: { type: String, required: true },
  medication: { type: String, required: true },
  dosage: { type: String, required: true },
  timePeriod: { type: String, required: true },
  conditionImage: { type: String },
  prescribedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Prescription', prescriptionSchema);