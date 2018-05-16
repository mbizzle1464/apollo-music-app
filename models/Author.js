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
      username: {
        type: DataTypes.STRING,
        notEmpty: true
},
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      picture: {
        type: DataTypes.STRING,
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
      genreSoftRock: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      genreEasyListen: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      genreClassicRock: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      genreTodayHits: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      genrePopRock: {
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
      genreKPop: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      genreClassical: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      genreYachtRock: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      decadeTwenties: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      decadeThirties: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      decadeforties: {
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
      listenRadio: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      listenSatelitte: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      listenCassette: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      listenEightTrack: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      listenCompactDisc: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      listenOnline: {
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
