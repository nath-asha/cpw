const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
    title: String,
    description: String,
    trackId: String,
    eventId : String,
});

module.exports = mongoose.model('Challenge',challengeSchema);