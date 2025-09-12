const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/me', authController.getMe);
router.get('/check-email', authController.checkEmail);
router.get('/check-phone', authController.checkPhone);

module.exports = router;