//File NOT Finished
const mongoose          = require('mongoose');
const Schema            = mongoose.Schema;

const scheduleSchema    = new Schema({
  teacher:              String,
  // student:           { type: Schema.Types.ObjectId, ref: 'User' },
  student:              String,
  slotAvailable:        Boolean,
  date:                 Date,
  time:                 String,
  duration:             Number,
  location:             String,
  rate:                 Number,
  instrument:           String
});

const Schedule          = mongoose.model('Schedule', scheduleSchema);
module.exports          = Schedule;
