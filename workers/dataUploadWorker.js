const { parentPort, workerData } = require('worker_threads');
const xlsx = require('xlsx');
const mongoose = require('mongoose');
const User = require('../models/User');
const Agent = require('../models/Agent');
const Account = require('../models/Account');
const PolicyCategory = require('../models/PolicyCategory');
const PolicyCarrier = require('../models/PolicyCarrier');
const PolicyInfo = require('../models/PolicyInfo');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/assessmentDB', { useNewUrlParser: true, useUnifiedTopology: true });

const workbook = xlsx.readFile(workerData.filePath);
const sheetName = workbook.SheetNames[0];
const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Process and save data to MongoDB
data.forEach(async (item) => {
    // Save to User collection
    const user = new User({
        firstName: item.firstname,
        dob: new Date(item.dob),
        address: item.address,
        phone: item.phone,
        state: item.state,
        zipCode: item.zip,
        email: item.email,
        gender: item.gender,
        userType: item.userType
    });
    await user.save();

    // Save to other collections similarly...

    const policyCategory = new PolicyCategory({ category_name: item.category_name });
    await policyCategory.save();

    const policyCarrier = new PolicyCarrier({ company_name: item.company_name });
    await policyCarrier.save();

    const policyInfo = new PolicyInfo({
        policyNumber: item.policy_number,
        policyStartDate: new Date(item.policy_start_date),
        policyEndDate: new Date(item.policy_end_date),
        policyCategoryId: policyCategory._id,
        companyId: policyCarrier._id,
        userId: user._id
    });
    await policyInfo.save();
});

parentPort.postMessage('Data upload completed');
