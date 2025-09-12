const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  reason: { type: String, required: true },
  vet: { type: String, required: true },
  symptoms: { type: String },
  diagnosis: { type: String },
  severity: { type: String, enum: ['Mild', 'Moderate', 'Severe'] },
  treatment: {
    medicines: { type: String },
    dosage: { type: String },
    injections: { type: String },
    feeding: { type: String }
  },
  labReports: [{ type: String }],
  vaccinations: [{ type: String }],
  followUp: {
    date: { type: Date },
    notes: { type: String },
    progress: { type: String }
  },
  documents: [{ type: String }]
});

const medicalRecordSchema = new mongoose.Schema({
  animalId: { type: String, required: true, unique: true },
  species: { type: String, required: true },
  breed: { type: String },
  age: { type: Number },
  weight: { type: String },
  owner: { type: String, required: true },
  visits: [visitSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);