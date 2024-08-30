const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes');
require('./models/PolicyCategory'); // Ensure these lines are added to register the models
require('./models/Company');
require('./models/PolicyInfo');
require('./models/User');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/assessmentDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const app = express();

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', apiRoutes);

// Start server
app.listen(3000, () => console.log('Server running on port 3000'));
