const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    companyName: { type: String, required: true }
    // Add other fields as needed
});

module.exports = mongoose.model('Company', CompanySchema);
