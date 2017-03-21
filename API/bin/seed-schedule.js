/*
mongoimport --db W9D5E2 --collection schedules --file schedule.json --jsonArray
*/
const mongoose          = require('mongoose');
mongoose.connect('mongodb://localhost/W9D5E2');
const Schedule          = require('../models/schedule-model.js');

const schedule          = [
  {
    teacher:              6,
    student:              1,
    slotAvailable:        true,
    date:                 'Wed Mar 22 2017 17:30:00 GMT-0400 (EDT)',
    duration:             30,
    location:             "Miami, FL",
    rate:                 25,
    instrument:           'Trumpet'
  },
  {
    teacher:              7,
    student:              2,
    slotAvailable:        true,
    date:                 'Thu Mar 23 2017 17:30:00 GMT-0400 (EDT)',
    duration:             30,
    location:             "Miami, FL",
    rate:                 25,
    instrument:           'Piano'
  },
  {
    teacher:              8,
    student:              3,
    slotAvailable:        true,
    date:                 'Fri Mar 24 2017 17:30:00 GMT-0400 (EDT)',
    duration:             30,
    location:             "Miami, FL",
    rate:                 25,
    instrument:           'Piano'
  }


];

//Push objects to the database.
Schedule.create(schedule, (err, items) => {
  if (err) {
    throw err;
  }
  items.forEach((item) => {
    console.log(`${item.name} + " " + ${item._id}`);
  });
    mongoose.disconnect();
});
