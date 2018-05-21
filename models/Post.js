//Post Model for our User 's Posts
// =============================================================
module.exports = function (sequelize, DataTypes) {

  var Post = sequelize.define("Post", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    comment: {
      type: DataTypes.TEXT,
      len: [1]
    },
  });

  Post.associate = function (models) {
    Post.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Post;
};
