//File NOT Finished
const express           = require('express');
const mongoose          = require('mongoose');
const router            = express.Router();
const bodyParser        = require('body-parser');
const passport          = require('passport');
const Schedule          = require('../models/schedule-model');
const Student           = require('../models/student-model');
const Teacher           = require('../models/teacher-model');
const User              = require('../models/user-model');
const bcrypt            = require("bcrypt");
const bcryptSalt        = 10;



router.get('/students', (req, res, next) => {
  Student.find((err, items) => {
    if (err) {
      res.json(err);
      return;
    }
    console.log(items);
    res.json(items);
  });
});

router.post('/students', (req, res, next) => {
  const newItem         = new Student({
    name:               req.body.name,
    instrument:         req.body.instrument,
    location:           req.body.location,
    phone:              req.body.phone,
    email:              req.body.email,
    student:            true,
    username:           user._id

  });
});

router.post('/schedulenew', (req, res, next) => {
  const newItem         = new Schedule({
    date:               req.body.date,
    time:               req.body.time,
    duration:           req.body.duration,
    location:           req.body.location,
    rate:               req.body.rate,
    instrument:         req.body.instrument,
    teacher:            req.user._id,
    slotAvailable:      true

  });
  console.log(newItem);
  newItem.save((err) => {
    if (err) {
      res.status(400).json({ message: "Something went wrong" });
    } else {
      res.status(200).json(newItem);
    }
  });
});

router.get('/availableclass', (req, res, next) => {
  Schedule.find({ 'slotAvailable': true }, ((err, items) => {
    //do a thing
    if(err) {
      res.json(err);
      return;
    }
    console.log(items);
    return res.json(items);
  })
);
});

router.get('/notavailable', (req, res, next) => {
  Schedule.find({ 'slotAvailable': false }, ((err, items) => {
    if(err) {
      res.json(err);
      return;
    }
    console.log(items);
    return res.json(items);
  })
  );
});

router.get('/myclass', (req, res, next) => {
  //Return list of classes for logged in Teacher
  Schedule.find({ 'teacher': req.user._id }, ((err, items) => {
      if (err) {
        res.json(err);
        return;
      }
      return res.json(items);
    })
  );
});

router.get('/teachers', (req, res, next) => {
  Teacher.find((err, items) => {
    if (err) {
      res.json(err);
      return;
    }
    console.log(items);
    res.json(items);
  });
});

router.post('/teachers', (req, res, next) => {
  const newItem         = new Student({
    name:               req.body.name,
    instrument:         req.body.instrument,
    location:           req.body.location,
    phone:              req.body.phone,
    email:              req.body.email,
    bio:                req.body.bio,
    student:            true,
    username:           user._id

  });
});

router.get('/students/:id', (req, res, next) => {
  //Check to see if ID is a valid mongoose identified
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified ID is NOT valid.'});
    return;
  }
  //Search for individual item by ID in the URL (API request)
  Student.findById(req.params.id, (err, item) => {
    res.json(item);
  });
});

router.get('/teachers/:id', (req, res, next) => {
  //Check to see if ID is a valid mongoose identified
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified ID is NOT valid.' });
    return;
  }
  //Search for individual item by ID in the URL (API request)
  Teacher.findById(req.params.id, (err, item) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(item);
  });
});

router.get('/schedule', (req, res, next) => {
  Schedule.find((err, items) => {
    if (err) {
      res.json(err);
      return;
    }
    console.log(items);
    res.json(items);
  });
});

router.get('/teacherschedule', (req, res, next) => {
  //Create Routes to seach for Current Teacher's Session ID within the Scheudle database
  Schedule.Find();
});

router.post('/schedule', (req, res, next) => {
  const newItem         = new Teacher({
    date:               req.body.date,
    duration:           req.body.duration,
    location:           req.body.location,
    rate:               req.body.rate,
    instrument:         req.body.instrument
  });
});

router.delete('/userdelete/:id', (req, res, next) => {
  //Check to see if ID is a valid Mongoose identification
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified ID is NOT valid.' });
  }
  User.remove({ _id: req.params.id }, (err) => {
    if(err) {
      res.json(err);
      return;
    }
    res.json({ message: 'This user has been removed.' });
  });
});

router.post('/scheduleregister/:id/:user', (req, res, next) => {
  // Add Student to Scheduled Class and change slotAvailable flag to false
  // Schedule.findById ({ _id: req.params.id }, err, tank => {

  Schedule.findOne({ _id: req.params.id }, (err, tank) => {
    if(err) {
      res.json('schedule-register-apiRoutes', err);
      return;
    }
    const item = req.params.user;
    tank.slotAvailable = false;
    tank.student = item;
    console.log(tank.student);
    tank.save((err) => {
      if(err) {
        return err.json();
      }
      res.status(200).json({ message: 'Student registered for the class.' });
      return;
      // res.send(updatedSchedule);
    });
    //  return res.json({ message: 'The student has registered for this class. '});
  });
});

router.post('/scheduledelete/:id', (req, res, next) => {
  //Check to see if ID is a valid Mongoose identification
  // if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
  //   res.status(400).json({ message: 'Specified ID is NOT valid.' });
  // }
  Schedule.remove({ _id: req.params.id }, (err) => {
    if(err) {
      res.json(err);
      return;
    }
    res.json({ message: 'The schedule event hsa been removed.' });
  });
});

//AUTHENTICATION

router.post("/signup", (req, res, next) => {
  //Capture Signup model information from the Signup form
  const username        = req.body.username;
  const password        = req.body.password;
  const name            = req.body.name;
  const instrument      = req.body.instrument;
  const phone           = req.body.phone;
  const email           = req.body.email;
  const location        = req.body.location;
  const student         = req.body.student;
  const teacher         = req.body.teacher;

  console.log(req.body);
  if (!username || !password) {
    res.status(400).json({ message: "Provide username and password" });
    return;
  }
  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: "The username already exists" });
      return;
    }
    const salt           = bcrypt.genSaltSync(bcryptSalt);
    const hashPass       = bcrypt.hashSync(password, salt);
    const newUser        = User({
      username,
      password: hashPass,
      name,
      instrument,
      location,
      phone,
      email,
      student,
      teacher
    });

    newUser.save((err) => {
      if (err) {
        res.status(400).json({ message: "Something went wrong" });
      } else {
        req.login(newUser, function(err) {
          if (err) {
            return res.status(500).json({
              message: 'something went wrong :('
            });
          }
          res.status(200).json(req.user);
        });
      }
    });
  });
});

router.post("/login", function (req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }

    // if (!user) { return res.status(401).json(info); }

    req.login(user, function(err) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: 'something went wrong :('
        });
      }
      console.log('SESSSSSSIIIIIOOOOOON', req.session);
      res.status(200).json(req.user);
    });
  })(req, res, next);
});


router.post("/logout", function(req, res) {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

router.get("/loggedin", function(req, res) {
  console.log('loooggggeedd iinnnnn ????????', req.session);

  if(req.isAuthenticated()) {
    return res.status(200).json(req.user);
  }
  return res.status(403).json({ message: 'Unauthorized' });
});
//  --Use this route to manage post-logged routes--
router.get("/private", (req, res) => {
  if(req.isAuthenticated()) {
    return res.json({ message: 'This is a private message' });
  }
  return res.status(403).json({ message: 'Unauthorized' });
});


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
