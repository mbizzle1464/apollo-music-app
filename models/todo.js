// Where the model will go. 

module.exports = function(sequelize, DataTypes) {
    var Member = sequelize.define("Member", {
      answer: DataTypes.STRING
    });
    return Member;
  };

  module.exports = function(sequelize, DataTypes) {
    var Genre = sequelize.define("Genre", {
      answer: DataTypes.STRING
    });
    return Genre;
  };

  // Rock
  // Punk
  // Pop
  // Rap
  // Country
  // R&B

  module.exports = function(sequelize, DataTypes) {
    var Decade = sequelize.define("Decade", {
      answer: DataTypes.STRING
    });
    return Decade;
  };

  //50s
  //60s
  //70s
  //80
  //90s
  //00s

  module.exports = function(sequelize, DataTypes) {
    var Beatle = sequelize.define("Beatle", {
      answer: DataTypes.STRING
    });
    return Beatle;
  };

  //Paul
  //John
  //Ringo
  //George
  
  module.exports = function(sequelize, DataTypes) {
    var badBand = sequelize.define("Bad Band", {
      answer: DataTypes.STRING
    });
    return badBand;
  };

  //ICP
  //Soulja Boy
  //Nickleback
  //Right Said Fred
  //Metro Station

  module.exports = function(sequelize, DataTypes) {
    var Kanye = sequelize.define("Kanye", {
      answer: DataTypes.STRING
    });
    return Kanye;
  };

  //Graduation
  //Yeezus
  //College Drop Out
  //My Beautiful Dark Twisted Fantasy
  //Life of Pablo

  module.exports = function(sequelize, DataTypes) {
    var Listen = sequelize.define("Listen", {
      answer: DataTypes.STRING
    });
    return Listen;
  };

  //MP3
  //Cassette
  //Record

  module.exports = function(sequelize, DataTypes) {
    var Or = sequelize.define("Or", {
      answer: DataTypes.STRING
    });
    return Or;
  };

  //Live
  //Studio
  
  module.exports = function(sequelize, DataTypes) {
    var Cover = sequelize.define("Cover", {
      answer: DataTypes.STRING
    });
    return Cover;
  };

  //Best Cover Bands

  //No Way Sis
  //Antarctic Monkeys
  //Blackest Sabbath
  //Non Jovi
  //Nudist Priest
  //Lemmy’s Wart
  //Kween
  //U2-2
  //Velvet Underpants

