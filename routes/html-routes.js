// Dependencies
// =============================================================
var path = require("path");
var router = require('express').Router();
var db = require("../models");


    router.get('/cms/:id', function (req, res) {
            db.Author.findOne({
                where: {
                    id: req.params.id
                }
            }).then(function (data) {
                res.render('cms', {
                    data:data
                })
            })
    });
    
module.exports = router;
