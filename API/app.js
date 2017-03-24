const express           = require('express');
const path              = require('path');
const favicon           = require('serve-favicon');
const logger            = require('morgan');
const cookieParser      = require('cookie-parser');
const bodyParser        = require('body-parser');
const layouts           = require('express-ejs-layouts');
const mongoose          = require('mongoose');
const dotenv            = require('dotenv');
const cors              = require('cors');
const passport          = require('passport');
const LocalStrategy     = require('passport-local').Strategy;
const User              = require('./models/user-model');
const session           = require('express-session');
const bcrypt            = require("bcrypt");


dotenv.config();
mongoose.connect(process.env.MONGODB_URI);

const app               = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title
app.locals.title        = 'W9D5E2';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);
//Disable CORS in the Production environment
if (process.env.NODE_ENV !== 'production') {
  app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200', 'http://localhost:8000']
  }));
}


//START - Authentication

  passport.use(new LocalStrategy((username, password, next) => {
    User.findOne({ username }, (err, user) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        return next(null, false, { message: "Incorrect username" });
      }

      if (!bcrypt.compareSync(password, user.password)) {
        return next(null, false, { message: "Incorrect password" });
      }

      return next(null, user);
    });
  }));

  passport.serializeUser((user, cb) => {
    console.log('Save to session????', user);
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    console.log('Retrieve from Session????', id);
    User.findOne({ "_id": id }, (err, user) => {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });

app.use(session({
  secret: "passport-local-strategy",
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 2419200000 }
}));

//These belong before the Routes are declared
app.use(passport.initialize());
app.use(passport.session());

//END - Authentication



//const index             = require('./routes/index');

const api               = require('./routes/api-routes');
// app.use('/', api);
app.use('/api', api);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err             = new Error('Not Found');
  err.status            = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message    = err.message;
  res.locals.error      = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports          = app;
