// Where the model will go. 

  module.exports = function(sequelize, DataTypes) {
    var Bio = sequelize.define("Bio", {
        Song: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        Artist: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        coverBand: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
    return Bio;
  };
  

  module.exports = function(sequelize, DataTypes) {
    var Genre = sequelize.define("Genre", {
     Rock:DataTypes.BOOLEAN,
     Punk:DataTypes.BOOLEAN,
     Pop:DataTypes.BOOLEAN,
     Country:DataTypes.BOOLEAN,
     Rap:DataTypes.BOOLEAN,     
     RNB:DataTypes.BOOLEAN
    });
    return Genre;
  };


  module.exports = function(sequelize, DataTypes) {
      var Decade = sequelize.define("Decade", {
        Fifties:DataTypes.BOOLEAN,
        Sixties:DataTypes.BOOLEAN,
        Seventies:DataTypes.BOOLEAN,
        Eighties:DataTypes.BOOLEAN,
        Nineties:DataTypes.BOOLEAN,     
        Noughties:DataTypes.BOOLEAN    
      });
    return Decade;
  };

 
  module.exports = function(sequelize, DataTypes) {
    var Listen = sequelize.define("Listen", {
      Audio:DataTypes.BOOLEAN,
      Cassette:DataTypes.BOOLEAN,     
      Record:DataTypes.BOOLEAN   
     });
    return Listen;
  };


  module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        },
      }
    });
    return Post;
  };


  
  

