const express = require('express');
const router = express.Router();
const veterinarianController = require('../controllers/veterinarianController');
const auth = require('../middleware/auth');
const roleAuth = require('../middleware/roleAuth');

router.get('/dashboard', auth, roleAuth(['veterinarian']), veterinarianController.getVetDashboard);
router.get('/my-patients', auth, roleAuth(['veterinarian']), veterinarianController.getMyPatients);
router.get('/appointments', auth, roleAuth(['veterinarian']), veterinarianController.getMyAppointments);
router.get('/today-appointments', auth, roleAuth(['veterinarian']), veterinarianController.getTodayAppointments);
router.get('/medical-records', auth, roleAuth(['veterinarian']), veterinarianController.getMedicalRecords);
router.post('/add-prescription', auth, roleAuth(['veterinarian']), veterinarianController.addPrescription);

module.exports = router;