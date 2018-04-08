let express = require('express');
let path = require('path');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let session = require('express-session');
let passport = require('passport');
let flash = require('connect-flash');

let config = require('./config');
let methodOverride = require('method-override');

let mongoose = require("mongoose");
let db = require("./db");

mongoose.connect(process.env.URI || db.URI);

let mongoDB = mongoose.connection;
mongoDB.once('open', () =>{
  console.log("Connected to DB...");
});

let app = express();
//define routes
let index = require('../app/routes/index.routes');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: config.sessionSecret
}));

app.use(flash());

//Configure and register passport
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(path.join(__dirname, '../dist')));
app.use('/lib', express.static(path.resolve('./node_modules')));
app.use('/', index);

app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
  });

module.exports = app;