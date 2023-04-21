const { Sequelize } = require("sequelize");

var client = new Sequelize(
    'testing',
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

client.authenticate().then(() => {
    console.log("Success!");
}).catch((err) => {
    console.log(err);
});

module.exports = client;