const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    name: String,
    score: Number,
    github_url: String,
});

module.exports = mongoose.model('Score',scoreSchema);