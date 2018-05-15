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
app.use(express.static("public"));

//Express - Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//db
var db = require("./models");

//For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Routes
// =============================================================
//Routes
var authRoute = require('./routes/auth.js')(app, passport);
//load passport strategies
require('./config/passport/passport.js')(passport, db.user);
var postController = require("./controllers/post-controller.js");
var authorController = require("./controllers/author-controller.js");
var viewController = require("./controllers/view-controller.js");

app.use(postController);
app.use(authorController);
app.use(viewController);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
