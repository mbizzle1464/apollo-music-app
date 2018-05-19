// Global Dependencies 
// =============================================================

var express = require('express');
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
var env = require('dotenv').load();
var exphbs = require('express-handlebars');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

//Body Parser Middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

// Static directory
app.use(express.static(__dirname + '/public'));

//Express - Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

//Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

//Require Database Models 
var db = require("./models");

//For Handlebars Views
app.set('views', './views')
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  partial: 'views/partials'
}));
app.set('view engine', '.hbs');

// Route File for Res.Render
// =============================================================
var authRoute = require('./routes/auth.js')(app, passport);
//load passport strategies
require('./config/passport/passport.js')(passport, db.user);


// API Routes
// =============================================================
var postController = require("./routes/post-api.js");
var authorController = require("./routes/author-api.js");
var profileController = require("./routes/profile-api.js");
var htmlController = require("./routes/html-routes.js");
app.use(postController);
app.use(authorController);
app.use(profileController);
app.use(htmlController);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
  });
});

