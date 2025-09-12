const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintController');
const auth = require('../middleware/auth');

router.post('/', auth, complaintController.createComplaint);
router.get('/', auth, complaintController.getComplaints);
router.get('/:id', auth, complaintController.getComplaintById);
router.put('/:id', auth, complaintController.updateComplaint);
router.delete('/:id', auth, complaintController.deleteComplaint);

module.exports = router;