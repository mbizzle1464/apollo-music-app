// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var router = require('express').Router();
var db = require("../models");

// Routes
// =============================================================

// cms route loads cms.html
router.get("/cms", function (req, res) {
    res.render('cms');
});

router.get("/authors", function (req, res) {
    res.render('authors');
});

router.get("/profile", function (req, res){
    res.render('profile');  
});

module.exports = router;