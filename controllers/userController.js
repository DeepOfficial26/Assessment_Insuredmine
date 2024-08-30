const User = require('../models/User');
const PolicyInfo = require('../models/PolicyInfo');
const { Worker } = require('worker_threads');
const path = require('path');

// 1. Upload Data API
exports.uploadData = (req, res) => {
    const worker = new Worker(path.join(__dirname, '../workers/dataUploadWorker.js'), {
        workerData: { filePath: req.file.path }
    });

    worker.on('message', () => {
        res.render('upload', { message: 'File uploaded successfully!' });
    });

    worker.on('error', (err) => {
        res.render('upload', { message: 'Failed to upload file.' });
    });
};

// 2. Search API
exports.searchByUsername = async (req, res) => {
    try {
        console.log('Request Body:', req.body); // Log the entire request body

        const username = req.body.username;
        if (!username) {
            return res.render('search', { message: 'Username is required', policies: [] });
        }

        const user = await User.findOne({ firstName: username });
        if (!user) return res.render('search', { message: 'User not found', policies: [] });

        const policies = await PolicyInfo.find({ userId: user._id }).populate('policyCategoryId companyId');
        res.render('search', { message: null, policies });
    } catch (err) {
        console.error('Error during searchByUsername:', err); // Log the error details
        res.render('search', { message: 'Error occurred: ' + err.message, policies: [] });
    }
};



// 3. Aggregate Policy API
exports.aggregatePolicies = async (req, res) => {
    try {
        const aggregation = await PolicyInfo.aggregate([
            { $group: { _id: "$userId", totalPolicies: { $sum: 1 } } }
        ]);
        res.render('aggregate', { aggregation });
    } catch (err) {
        res.render('aggregate', { aggregation: [], message: 'Error occurred' });
    }
};
