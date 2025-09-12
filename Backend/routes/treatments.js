const express = require('express');
const router = express.Router();
const treatmentController = require('../controllers/treatmentController');
const auth = require('../middleware/auth');

router.post('/', auth, treatmentController.createTreatment);
router.get('/', auth, treatmentController.getTreatments);
router.get('/animal/:animalId', auth, treatmentController.getAnimalTreatments);
router.put('/:id', auth, treatmentController.updateTreatment);

module.exports = router;