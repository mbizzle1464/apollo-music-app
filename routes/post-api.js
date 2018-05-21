// Dependencies
// =============================================================
var path = require("path");
var router = require('express').Router();
var db = require("../models");

// Routes
// =============================================================

// These routes provide us with the ability to see the data parsed in the api.


router.get("/api/posts", function (req, res) {
 
  db.Post.findAll({
  order: [['updatedAt', 'DESC']],

    include: [db.Author]

  }).then(function (dbPost) {
    res.json(dbPost);
  });
});

router.get("/api/posts/:id", function (req, res) {
  db.Post.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbPost) {
    res.json(dbPost);
  });
});

router.post("/api/posts", function (req, res) {
  db.Post.create(req.body).then(function (dbPost) {
    res.render('dashboard');
  });
});

router.delete("/api/posts/:id", function (req, res) {
  db.Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbPost) {
    res.json(dbPost);
  });
});

router.put("/api/posts", function (req, res) {
  db.Post.update(
    req.body, {
      where: {
        id: req.body.id
      }
    }).then(function (dbPost) {
    res.json(dbPost);
  });
});

module.exports = router;