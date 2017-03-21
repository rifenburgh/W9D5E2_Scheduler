//File NOT Finished
const mongoose          = require('mongoose');
const Schema            = mongoose.Schema;

const teacherSchema       = new Schema({

});

const Teacher           = mongoose.model('Teacher', teacherSchema);
module.exports          = Teacher;
