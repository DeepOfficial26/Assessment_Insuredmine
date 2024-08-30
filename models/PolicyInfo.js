const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PolicyInfoSchema = new Schema({
    policyNumber: { type: String, required: true },
    policyStartDate: { type: Date, required: true },
    policyEndDate: { type: Date, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    policyCategoryId: { type: Schema.Types.ObjectId, ref: 'PolicyCategory', required: true },
    companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true }
});

module.exports = mongoose.model('PolicyInfo', PolicyInfoSchema);
