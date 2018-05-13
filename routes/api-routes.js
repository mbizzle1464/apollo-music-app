var db = require("../models");

module.exports = function(app) {

  app.get("/api/bio/", function(req, res) {
    db.Bio.findAll({})
      .then(function(dbBio) {
        res.json(dbBio);
      });
  });

  app.get("/api/bio/", function(req, res) {
    db.Genre.findAll({})
      .then(function(dbGenre) {
        res.json(dbGenre);
      });
  });
  
  app.get("/api/bio/", function(req, res) {
    db.Decade.findAll({})
      .then(function(dbDecade) {
        res.json(dbDecade);
      });
  });

  app.get("/api/bio/", function(req, res) {
    db.Listen.findAll({})
      .then(function(dbListen) {
        res.json(dbListen);
      });
  });

  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Post.create({
      body: req.body.body,
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  app.put("/api/posts", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};