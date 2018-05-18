// Routes for authentication
// =============================================================

var exports = module.exports = {}

exports.signup = function (req, res) {

    res.render('signup');

}
exports.signin = function (req, res) {

    res.render('signin');

}

exports.cms = function (req, res) {
    var author = req.user;  
    console.log("11111111111111111111111111\n11111111111111111111111111\n11111111111111111111111111\n11111111111111111111111111\n11111111111111111111111111\n")
    console.log(req.user);  
    res.render('cms', {author:author});

}
exports.dashboard = function (req, res) { 
    var author = {
        id: req.user.id
    }
    res.render('dashboard',{author:author});

}

exports.logout = function (req, res) {

    req.session.destroy(function (err) {

        res.redirect('/signin');

    });

}