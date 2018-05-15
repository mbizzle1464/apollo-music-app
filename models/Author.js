module.exports = function(sequelize, DataTypes) {
  
  var Author = sequelize.define("Author", {
    email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
      },
      firstname: {
        type: DataTypes.STRING,
        notEmpty: true
      },
      lastname: {
        type: DataTypes.STRING,
        notEmpty: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      favoriteSong: {
        type: DataTypes.STRING,
        validate: {
          len: [1]
        }
      },
      favoriteArtist: {
        type: DataTypes.STRING,
        validate: {
          len: [1]
        }
      },
      favoritecoverBand: {
        type: DataTypes.STRING,
        validate: {
          len: [1]
        }
      },
      genreRock: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      genrePunk: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      genrePunkPop: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      genreCountry: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      genreRap: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      genreRNB: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      decadeFifties: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      decadeSixties: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      decadeSeventies: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      decadeEighties: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      decadeNineties: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      decadeNoughties: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      listenAudio: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      listenCassette: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      listenRecord: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      profileBody: {
        type: DataTypes.TEXT,
        validate: {
          len: [1]
        }
      },
  });

  Author.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Author;
};
