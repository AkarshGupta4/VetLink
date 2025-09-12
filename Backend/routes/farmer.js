const express = require('express');
const router = express.Router();
const farmerController = require('../controllers/farmerController');
const auth = require('../middleware/auth');
const roleAuth = require('../middleware/roleAuth');

router.get('/dashboard', auth, roleAuth(['farmer']), farmerController.getFarmerDashboard);
router.get('/my-animals', auth, roleAuth(['farmer']), farmerController.getMyAnimals);
router.get('/animal/:id', auth, roleAuth(['farmer']), farmerController.getAnimalDetails);
router.get('/reports', auth, roleAuth(['farmer']), farmerController.getMyReports);
router.get('/complaints', auth, roleAuth(['farmer']), farmerController.getMyComplaints);

module.exports = router;