const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const auth = require('../middleware/auth');

router.get('/stats', auth, dashboardController.getDashboardStats);
router.get('/health-trends', auth, dashboardController.getHealthTrends);
router.get('/revenue-data', auth, dashboardController.getRevenueData);

module.exports = router;