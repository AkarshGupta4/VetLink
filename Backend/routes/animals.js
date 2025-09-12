const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

router.post('/', auth, upload.single('animalImage'), animalController.createAnimal);
router.get('/', auth, animalController.getAnimals);
router.get('/:id', auth, animalController.getAnimalById);
router.put('/:id', auth, upload.single('animalImage'), animalController.updateAnimal);
router.delete('/:id', auth, animalController.deleteAnimal);
router.get('/farmer/:farmerId', auth, animalController.getFarmerAnimals);

module.exports = router;