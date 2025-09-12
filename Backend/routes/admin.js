const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');
const roleAuth = require('../middleware/roleAuth');

router.get('/dashboard', auth, roleAuth(['admin']), adminController.getAdminDashboard);
router.get('/users', auth, roleAuth(['admin']), adminController.getAllUsers);
router.get('/users/:role', auth, roleAuth(['admin']), adminController.getUsersByRole);
router.post('/users/:id/status', auth, roleAuth(['admin']), adminController.updateUserStatus);
router.get('/stats/overview', auth, roleAuth(['admin']), adminController.getSystemOverview);
router.get('/reports/system', auth, roleAuth(['admin']), adminController.getSystemReports);

module.exports = router;