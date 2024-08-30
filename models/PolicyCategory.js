const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PolicyCategorySchema = new Schema({
    categoryName: { type: String, required: true }
    // Add other fields as needed
});

module.exports = mongoose.model('PolicyCategory', PolicyCategorySchema);
