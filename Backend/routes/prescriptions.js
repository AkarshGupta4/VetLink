const express = require('express');
const router = express.Router();
const prescriptionController = require('../controllers/prescriptionController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

router.post('/', auth, upload.single('conditionImage'), prescriptionController.createPrescription);
router.get('/', auth, prescriptionController.getPrescriptions);
router.get('/animal/:animalId', auth, prescriptionController.getAnimalPrescriptions);
router.get('/:id', auth, prescriptionController.getPrescriptionById);

module.exports = router;