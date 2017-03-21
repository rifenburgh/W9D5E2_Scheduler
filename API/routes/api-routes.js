//File NOT Finished
const express           = require('express');
const mongoose          = require('mongoose');
const router            = express.Router();
const bodyParser        = require('body-parser');
const Schedule          = require('../models/schedule-model');
const Student           = require('../models/student-model');
const Teacher           = require('../models/teacher-model');
const User              = require('../models/user-model');

module.exports          = router;


/*
router.get('/phones', (req, res, next) => {
  Phones.find((err, phonesList) => {
    if(err) {
      res.json(err);
      return;
    }
    console.log(phonesList);
    res.json(phonesList);
  });
});

router.post('/phones', (req, res, next) => {
  //POST URLEncoded http://localhost:3000/api/phones/
  //Capture new Phone details from the web page form
  const thePhone        = new Phones ({
    brand:              req.body.brand,
    name:               req.body.name,
    specs:              req.body.specs,
    image:              req.body.image,
  });

  // console.log(thePhone);
  thePhone.save((err) => {
    //Checks to see if there is an error in the Mongoose save
    if(err) {
      res.json(err);
      return;
    }
    //Save to the database and response with JSON
    res.json({
      message:          'new Phone Created.',
      id:               thePhone._id
    });
  });
});

router.get('/phones/:id', (req, res, next) => {
  //Check to see if ID is a valid mongoose identified
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified ID is NOT valid.' });
    return;
  }
  //Search for individudal phone by ID in the URL (API request)
  Phones.findById(req.params.id, (err, thePhone) => {
    if (err) {
      res.json(err);
      return;
    }
    //Returns JSON for individual phone
    res.json(thePhone);
  });
});

//UPDATE Phone in API
router.put('/phones/:id', (req, res, next) => {
  //Check to see if ID is a valid mongoose identified
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified ID is NOT valid.' });
    return;
  }
  const updates         = {
    brand:              req.body.brand,
    name:               req.body.name,
    specs:              req.body.specs,
    image:              req.body.image
  };
  Phones.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json({ message: 'Phone Updated Successfully.' });
  });
});

router.delete('/phones/:id', (req, res, next) => {
  //Check to see if ID is a valid mongoose identified
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified ID is NOT valid.' });
    return;
  }
  Phones.remove({ _id: req.params.id}, (err) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json({ message: 'Phone has been removed.' });
  });
});


*/
