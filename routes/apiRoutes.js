const express = require('express');
const router = express.Router();
const multer = require('multer');
const userController = require('../controllers/userController');

const upload = multer({ dest: 'uploads/' });

router.get('/upload', (req, res) => res.render('upload', { message: null }));
router.post('/upload', upload.single('csvFile'), userController.uploadData);

router.get('/search', (req, res) => res.render('search', { message: null, policies: [] }));
router.post('/search', userController.searchByUsername);

router.get('/aggregate', userController.aggregatePolicies);

module.exports = router;
