const mongoose          = require('mongoose');
mongoose.connect('mongodb://localhost/W9D5E2');
const Teacher           = require('../models/student-model.js');

const teachers          = [
  {
    username:           6,
    name:               "Mr. Smith 6",
    instrument:         "Guitar",
    location:           "Miami, FL",
    phone:              "098-765-4321",
    bio:                "",
    email:              "Email6@building.com"
  },
  {
    username:           7,
    name:               "Mrs. Smith 7",
    instrument:         "Violin",
    location:           "Miami, FL",
    phone:              "987-654-3210",
    bio:                "",
    email:              "Email7@building.com"
  },
  {
    username:           8,
    name:               "Mrs. Johns 8",
    instrument:         "Violin",
    location:           "Miami, FL",
    phone:              "876-543-2109",
    bio:                "",
    email:              "Email9@building.com"
  },
  {
    username:           9,
    name:               "Mrs. McCormick 9",
    instrument:         "Piano",
    location:           "Miami, FL",
    phone:              "765-432-1098",
    bio:                "",
    email:              "Email9@building.com"
  },
  {
    username:           10,
    name:               "Mrs. Vrusk 10",
    instrument:         "Trumpet",
    location:           "Miami, FL",
    phone:              "123-456-7890",
    bio:                "",
    email:              "Email1@building.com"
  },


];

//Push objects to the database.
Teacher.create(teachers, (err, items) => {
  if (err) {
    throw err;
  }
  items.forEach((item) => {
    console.log(`${item.name} + " " + ${item._id}`);
  });
    mongoose.disconnect();
});
