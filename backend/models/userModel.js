const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: Number,
    role: {type : String, default: 'user'},
    team: {type : String, default: 'none'},
    organization: {type : String, required: true},
    description: String,// to know whether user is team leader or member
    skills: String,
    github_url : {type : String, required: true},
    linkedin_url :{type : String, required: true},
    twitter_url: String,
});

module.exports = mongoose.model("User",userSchema);