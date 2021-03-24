var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var session = require('express-session');

var indexRouter = require('./routes/index');
var editeurRouter = require('./routes/suivi');
var exposantRouter = require('./routes/exposant');


var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(cors())
app.use(session({
  name: 'sid',
  resave: false,
  saveUninitialized: false,
  secret: 'bhheyherhvervc',
  cookie: {
    httpOnly: false, //a modifier
    maxAge: 1000 * 60 * 60 * 24 * 30,
    sameSite: true,
    secure: false //a modifier 
  }
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/suivi',editeurRouter);
app.use('/exposant',exposantRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).json({
    message: err.message,
    error: err
  });
});

module.exports = app;
