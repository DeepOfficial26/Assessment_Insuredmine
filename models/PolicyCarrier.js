const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PolicyCarrierSchema = new mongoose.Schema({
    company_name: String
});

module.exports = mongoose.model('PolicyCarrier', PolicyCarrierSchema);
