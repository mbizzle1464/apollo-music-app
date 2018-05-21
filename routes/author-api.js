// Dependencies
// =============================================================
var path = require("path");
var router = require('express').Router();
var db = require("../models");

// Routes
// =============================================================

// These routes provide us with the ability to see the data parsed in the api. 

router.get("/api/authors", function (req, res) {
  db.Author.findAll({
    include: [db.Post]
  }).then(function (dbAuthor) {
    res.json(dbAuthor);
  });
});

router.get("/api/authors/:id", function (req, res) {
  db.Author.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbAuthor) {
    res.json(dbAuthor);
  });
});

router.post("/api/authors", function (req, res) {
  console.log(req.body);
  db.Author.create(req.body).then(function (dbAuthor) {
    res.json(dbAuthor);
  });
});

router.delete("/api/authors/:id", function (req, res) {
  db.Author.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbAuthor) {
    res.json(dbAuthor);
  });
});

module.exports = router;