//File NOT Finished
const mongoose          = require('mongoose');
const Schema            = mongoose.Schema;

const teacherSchema     = new Schema({
  username:             { type: Schema.Types.ObjectId, ref: 'User' },
  name:                 String,
  instrument:           String,
  location:             String,
  phone:                String,
  bio:                  String,
  email:                String,
  teacher:              Boolean

});

const Teacher           = mongoose.model('Teacher', teacherSchema);
module.exports          = Teacher;
