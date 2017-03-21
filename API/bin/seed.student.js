const mongoose          = require('mongoose');
mongoose.connect('mongodb://localhost/W9D5E2');
const Student           = require('../models/student-model.js');

const students          = [
  {
    username:           1,
    name:               "Sally 1",
    instrument:         "Trumpet",
    location:           "Miami, FL",
    phone:              "123-456-7890",
    email:              "Email1@building.com"
  },
  {
    username:           2,
    name:               "Johnny 2",
    instrument:         "Piano",
    location:           "Miami, FL",
    phone:              "234-567-8901",
    email:              "Email2@building.com"
  },
  {
    username:           3,
    name:               "Frankie 3",
    instrument:         "Piano",
    location:           "Miami, FL",
    phone:              "345-678-9012",
    email:              "Email3@building.com"
  },
  {
    username:           4,
    name:               "Rachie 4",
    instrument:         "Piano",
    location:           "Miami, FL",
    phone:              "456-789-0123",
    email:              "Email4@building.com"
  },
  {
    username:           5,
    name:               "Nancy 5",
    instrument:         "Piano",
    location:           "Miami, FL",
    phone:              "567-890-1234",
    email:              "Email5@building.com"
  }


];

//Push objects to the database.
Student.create(students, (err, items) => {
  if (err) {
    throw err;
  }
  items.forEach((item) => {
    console.log(`${item.name} + " " + ${item._id}`);
  });
    mongoose.disconnect();
});
