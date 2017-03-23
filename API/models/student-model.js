//File NOT Finished
const mongoose          = require('mongoose');
const Schema            = mongoose.Schema;

const studentSchema     = new Schema({
  username:             { type: Schema.Types.ObjectId, ref: 'User' },
  name:                 String,
  instrument:           String,
  location:             String,
  phone:                String,
  email:                String,
  student:              Boolean
});

const Student           = mongoose.model('Student', studentSchema);
module.exports          = Student;
