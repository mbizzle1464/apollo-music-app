// Dependencies
// =============================================================
var path = require("path");
var router = require('express').Router();
var db = require("../models");

// Routes
// =============================================================

// These routes provide us with the ability to see the data parsed in the api.


router.get("/api/cms", function (req, res) {
    db.Author.findAll({
        include: [db.Post]
    }).then(function (dbAuthor) {
        res.json(dbAuthor);
    });
});

router.get("/api/cms/:id", function (req, res) {
    db.Author.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Post]
    }).then(function (dbAuthor) {
        res.json(dbAuthor);
    });
});

router.post("/api/cms", function (req, res) {
    console.log(req.body);
    db.Author.create(req.body).then(function (dbAuthor) {
        res.json(dbAuthor);
    });
});

router.post("/api/cms/:id", function (req, res) {
    db.Author.create(req.body).then(function (dbAuthor) {
        res.json(dbAuthor);
    });
});

router.put("/api/cms:id", function (req, res) {
    console.log(req.body);
    db.Author.update(
        req.body, {
            where: {
                id: req.body.id
            }
        }).then(function (dbAuthor) {
        res.json(dbAuthor);
    });
});

router.delete("/api/cms/:id", function (req, res) {
    db.Author.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbAuthor) {
        res.json(dbAuthor);
    });
});

module.exports = router;
