const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  animalId: { type: String, required: true },
  animalType: { type: String, required: true },
  issue: { type: String, required: true },
  severity: { 
    type: String, 
    enum: ['Mild', 'Moderate', 'Severe'], 
    default: 'Moderate' 
  },
  date: { type: Date, default: Date.now },
  contact: { type: String },
  status: { 
    type: String, 
    enum: ['Pending', 'In Progress', 'Resolved'], 
    default: 'Pending' 
  },
  submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  vetNotes: { type: String },
  resolvedAt: { type: Date }
});

module.exports = mongoose.model('Complaint', complaintSchema);