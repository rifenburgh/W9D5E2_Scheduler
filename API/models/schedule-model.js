//File NOT Finished
const mongoose          = require('mongoose');
const Schema            = mongoose.Schema;

const scheduleSchema    = new Schema({

});

const Schedule          = mongoose.model('Schedule', scheduleSchema);
module.exports          = Schedule;
