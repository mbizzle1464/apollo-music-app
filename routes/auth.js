// For Passport Validation
// =============================================================

var authController = require('../controllers/auth-controller.js');
var db = require("../models");

module.exports = function (app, passport) {

    app.get('/', authController.signin);

    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }));

    app.get('/dashboard', isLoggedIn, authController.dashboard);

    app.get('/posts', isLoggedIn, authController.posts);

    app.get('/authors', isLoggedIn, authController.authors);
    
    app.get('/logout', authController.logout);


    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin'
    }));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }

}