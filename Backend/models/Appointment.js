const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  farmer: { 
    name: { type: String, required: true },
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  animal: { type: String, required: true },
  date: { type: Date, required: true },
  reason: { type: String },
  status: { 
    type: String, 
    enum: ['Pending', 'Approved', 'Rejected', 'Completed'], 
    default: 'Pending' 
  },
  veterinarian: { 
    name: { type: String },
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Appointment', appointmentSchema);