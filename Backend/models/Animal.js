const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  animalId: { type: String, required: true, unique: true },
  type: { 
    type: String, 
    required: true, 
    enum: ['Cow', 'Buffalo', 'Goat', 'Sheep', 'Pig', 'Poultry'] 
  },
  breed: { type: String },
  age: { type: String },
  gender: { type: String, enum: ['Male', 'Female'] },
  weight: { type: Number },
  healthStatus: { 
    type: String, 
    enum: ['Healthy', 'Sick', 'Under Treatment'], 
    default: 'Healthy' 
  },
  vaccination: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  farmRegNo: { type: String, required: true },
  ownerName: { type: String, required: true },
  contact: { type: String, required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Animal', animalSchema);
