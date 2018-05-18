 //load bcrypt
 var bCrypt = require('bcrypt-nodejs');
 var db = require('../../models');


 module.exports = function (passport, user) {

     var User = db.Author;
     var LocalStrategy = require('passport-local').Strategy;


     passport.serializeUser(function (user, done) {
         done(null, user.id);
     });


     // used to deserialize the user
     passport.deserializeUser(function (id, done) {
         User.findById(id).then(function (user) {
             if (user) {
                 done(null, user.get());
             } else {
                 done(user.errors, null);
             }
         });

     });


     passport.use('local-signup', new LocalStrategy(

         {
             usernameField: 'email',
             passwordField: 'password',
             passReqToCallback: true // allows us to pass back the entire request to the callback
         },

         function (req, email, password, done) {


             var generateHash = function (password) {
                 return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
             };

             User.findOne({
                 where: {
                     email: email
                 }, 
             }).then(function (user) {

                 if (user) {
                     return done(null, false, {
                         message: 'That email is already taken'
                     });
                 } else {
                     var userPassword = generateHash(password);
                     var data = {
                         email: email,
                         password: userPassword,
                         firstname: req.body.firstname,
                         lastname: req.body.lastname,
                         username: req.body.username,
                         picture: req.body.picture,
                         favoriteSong: req.body.favoriteSong,
                         favoriteArtist: req.body.favoriteArtist,
                         favoriteCoverBand: req.body.favoriteCoverBand,
                         genreRock: req.body.genreRock,
                         genreSoftRock: req.body.genreSoftRock,
                         genreEasyListen: req.body.genreEasyListen,
                         genreClassicRock: req.body.genreClassicRock,
                         genreTodayHits: req.body.genreTodayHits,
                         genrePopRock: req.body.genrePopRock,
                         genrePunk: req.body.genrePunk,
                         genrePunkPop: req.body.genrePunkPop,
                         genreCountry: req.body.genreCountry,
                         genreRap: req.body.genreRap,
                         genreRNB: req.body.genreRNB,
                         genreKPop: req.body.genreKPop,
                         genreClassical: req.body.genreClassical,
                         genreYachtRock: req.body.genreYachtRock,
                         decadeTwenties: req.body.decadeTwenties,
                         decadeThirties: req.body.decadeThirties,
                         decadeforties: req.body.decadeforties,
                         decadeFifties: req.body.decadeFifties,
                         decadeSixties: req.body.decadeSixties,
                         decadeSeventies: req.body.decadeSeventies,
                         decadeEighties: req.body.decadeEighties,
                         decadeNineties: req.body.decadeNineties,
                         decadeNoughties: req.body.decadeNoughties,
                         listenRadio: req.body.listenRadio,
                         listenSatelitte: req.body.listenSatelitte,
                         listenCassette: req.body.listenCassette,
                         listenEightTrack: req.body.listenEightTrack,
                         listenCompactDisc: req.body.listenCompactDisc,
                         listenOnline: req.body.listenOnline,
                         listenRecord: req.body.listenRecord,
                         profileBody: req.body.profileBody,
                     };


                     User.create(data).then(function (newUser, created) {
                         if (!newUser) {
                             return done(null, false);
                         }

                         if (newUser) {
                             return done(null, newUser);

                         }


                     });
                 }


             });



         }



     ));

     //LOCAL SIGNIN
     passport.use('local-signin', new LocalStrategy(

         {

             // by default, local strategy uses username and password, we will override with email
             usernameField: 'email',
             passwordField: 'password',
             passReqToCallback: true // allows us to pass back the entire request to the callback
         },

         function (req, email, password, done) {

             var User = db.Author;

             var isValidPassword = function (userpass, password) {
                 return bCrypt.compareSync(password, userpass);
             }

             User.findOne({
                 where: {
                     email: email
                 }
             }).then(function (user) {

                 if (!user) {
                     return done(null, false, {
                         message: 'Email does not exist'
                     });
                 }

                 if (!isValidPassword(user.password, password)) {

                     return done(null, false, {
                         message: 'Incorrect password.'
                     });

                 }

                 var userinfo = user.get();

                 return done(null, userinfo);

             }).catch(function (err) {

                 console.log("Error:", err);

                 return done(null, false, {
                     message: 'Something went wrong with your Signin'
                 });


             });

         }
     ));

 }