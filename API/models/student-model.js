//File NOT Finished
const mongoose          = require('mongoose');
const Schema            = mongoose.Schema;

const studentSchema     = new Schema({

});

const Student           = mongoose.model('Student', studentSchema);
module.exports          = Student;
