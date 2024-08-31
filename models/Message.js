// models/Message.js

const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    scheduledFor: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('Message', messageSchema);
