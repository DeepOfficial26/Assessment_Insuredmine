const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PolicyCategorySchema = new Schema({
    category_name: { type: String }
    // Add other fields as needed
});

module.exports = mongoose.model('PolicyCategory', PolicyCategorySchema);
