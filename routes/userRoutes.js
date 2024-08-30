const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/upload', userController.uploadData);
router.get('/search', userController.searchByUsername);
router.get('/aggregate', userController.aggregatePolicies);

module.exports = router;
