// controllers/messageController.js

const schedule = require('node-schedule');
const Message = require('../models/Message');

// Schedule message to be inserted into DB at the specified date and time
exports.scheduleMessage = async (req, res) => {
    const { message, day, time } = req.body;

    try {
        const [hour, minute] = time.split(':').map(Number);
        const [year, month, date] = day.split('-').map(Number);

        const scheduledTime = new Date(year, month - 1, date, hour, minute);

        // Schedule the job
        schedule.scheduleJob(scheduledTime, async function () {
            const newMessage = new Message({
                message,
                scheduledFor: scheduledTime,
                createdAt: new Date(),
            });
            await newMessage.save();
            console.log('Message inserted into DB:', message);
        });

        res.render('scheduleMessage', { message: 'Message scheduled successfully!' });
    } catch (error) {
        res.render('scheduleMessage', { message: 'Error scheduling message' });
    }
};

// Get all messages from the DB
exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ scheduledFor: -1 });
        res.render('message', { messages });
    } catch (error) {
        res.render('message', { messages: [], message: 'Error retrieving messages' });
    }
};
