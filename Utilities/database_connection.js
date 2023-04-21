const { Sequelize } = require("sequelize");

const connection = (database) => {
    return new Sequelize(
        database,
        'dude',
        'supersecret', {
        host: 'localhost',
        dialect: 'postgres'
        // pool: {
        //   max: 5,
        //   min: 0,
        //   idle: 10000
        // },
    });
}

module.exports = connection;