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
               var likeGenre = Object.keys(data.dataValues).filter(function (element) {
                    var prefix = element.substr(0, 5);
                    var booleanValue = data.dataValues[element];
                    return prefix === "genre" && booleanValue;
                });
               var genreName = likeGenre.map(function (element) {
                    return element.replace('genre', '').replace(/([a-z])([A-Z])/g, '$1 $2');
                });
                data.genreString = genreName.join(', ');
                console.log(data.genreString);

                var likeDecade = Object.keys(data.dataValues).filter(function (element) {
                    var prefix = element.substr(0, 6);
                    var booleanValue = data.dataValues[element];
                    return prefix === "decade" && booleanValue;
                });
                var decadeName = likeDecade.map(function (element) {
                    return element.replace('decade', '')
                });
                data.decadeString = decadeName.join(', ');  
                console.log(data.decadeString); 

                var likeListen = Object.keys(data.dataValues).filter(function (element) {
                    var prefix = element.substr(0, 6);
                    var booleanValue = data.dataValues[element];
                    return prefix === "listen" && booleanValue;
                });
                var listenName = likeListen.map(function (element) {
                    return element.replace('listen', '').replace(/([a-z])([A-Z])/g, '$1 $2');
                });
                data.listenString = listenName.join(', ');
                console.log(data.listenString);

                res.render('cms', {
                    data:data
                })
            })
    });
    
module.exports = router;
