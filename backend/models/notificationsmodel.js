const mongoose = require('mongoose');

const notifySchema = new mongoose.Schema({
    message: String,
    read: Boolean,
    userid: Number,
    team: Number,
});

module.exports = mongoose.model('notification',notifySchema);