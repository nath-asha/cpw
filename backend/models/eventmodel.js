const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventId: {type: String,required: true},
    title: {type: String,required: true},
    desc : {type: String,required: true},
    imgUrl: {type: String,required: true},
    date :{type: String,required: true},
    enddate: {type: String,required: true},
    venue : {type: String, enum: ['online', 'offline','hybrid'],required: true},
    prizes: {type: [String], default: []},
    scheduleDetails: {
        type: [{
            date: {type: String, required: true},
            event: {type: String, required: true},
            time : {type:String, required: true},
        }],
        required: true,
    },
    importantdates: {
        type: [String], required: true,
    }
});

module.exports = mongoose.model('event', eventSchema);