// Routes for authentication
// =============================================================
var db = require("../models");


var exports = module.exports = {}

exports.signup = function (req, res) {

    res.render('signup');

}
exports.signin = function (req, res) {

    res.render('signin');

}

exports.authors = function (req, res) {
    var author = req.user;
    res.render('authors', {
        author: author
    });

}
exports.cms = function (req, res) {
    var author = req.user;
    console.log(author);
    res.render('cms', {
        author: author
    });

}


exports.dashboard = function (req, res) {
    var author = {
        id: req.user.id
    }
    res.render('dashboard', {
        author: author
    });

}

exports.logout = function (req, res) {

    req.session.destroy(function (err) {

        res.redirect('/signin');

    });

}