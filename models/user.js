module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('user', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });

    return User;

}
