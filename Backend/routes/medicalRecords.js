const express = require('express');
const router = express.Router();
const medicalRecordController = require('../controllers/medicalRecordController');
const auth = require('../middleware/auth');

router.post('/', auth, medicalRecordController.createMedicalRecord);
router.get('/', auth, medicalRecordController.getMedicalRecords);
router.get('/animal/:animalId', auth, medicalRecordController.getAnimalMedicalRecord);
router.put('/:id/visit', auth, medicalRecordController.addVisit);
router.get('/:id', auth, medicalRecordController.getMedicalRecordById);

module.exports = router;