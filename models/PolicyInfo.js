const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PolicyInfoSchema = new Schema({
    policyNumber: { type: String },
    policyStartDate: { type: Date },
    policyEndDate: { type: Date },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    policyCategoryId: { type: Schema.Types.ObjectId, ref: 'PolicyCategory' },
    companyId: { type: Schema.Types.ObjectId, ref: 'Company' }
});

module.exports = mongoose.model('PolicyInfo', PolicyInfoSchema);
