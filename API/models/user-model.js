//File NOT Finished
const mongoose          = require('mongoose');
const Schema            = mongoose.Schema;

const userSchema        = new Schema({
  username:             String,
  password:             String,
  name:                 String,
  instrument:           String,
  location:             String,
  phone:                String,
  email:                String,
  student:              Boolean,
  teacher:              Boolean
  
  }, {
  timestamps: {
    createdAt:          "created_at",
    updatedAt:          "updated_at"
  }
});

const User              = mongoose.model('User', userSchema);
module.exports          = User;
