//File NOT Finished
const mongoose          = require('mongoose');
const Schema            = mongoose.Schema;

const scheduleSchema    = new Schema({
  teacher:              { type: Schema.Types.ObjectId, ref: 'User' },
  student:              { type: Schema.Types.ObjectId, ref: 'User' },
  slotAvailable:        Boolean,
  date:                 Date,
  duration:             Number,
  location:             String,
  rate:                 Number,
  instrument:           String
});

const Schedule          = mongoose.model('Schedule', scheduleSchema);
module.exports          = Schedule;
