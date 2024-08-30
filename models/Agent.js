const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Agent', AgentSchema);
