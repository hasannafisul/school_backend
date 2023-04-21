const { Sequelize } = require("sequelize");
const client = require("../db_config");
const Modal = require("../Modals")
const Schema = require('../Modals/Schema');
const connection = require("../Utilities/database_connection");

const home = (req, res) => {
    console.log('Running Successfully');
    res.json({ message: "Running Successfully" })
}


const getDummyData = async (req, res) => {
    const { database } = req.body
    const con = connection(database);
    try {
        const User = con.define('user_table', Schema.user_schema)
        const Car = con.define('car_table', Schema.car_schema)
        Car.hasMany(User, { foreignKey: 'user_id' });
        User.belongsTo(Car, { foreignKey: "user_id" });
        let data = await User.findAll({
            include: [{
                model: Car,
                required: true
            }]
        });
        return res.send(data)
    } catch (err) {
        res.send(err)
        console.log(err);
    }
}


const createData = async (req, res) => {
    const { name, email } = req.body;
    const data = {
        name: name,
        email: email
    }
    await Modal.User(client).create(data).then((result) => {
        return res.send(result);
    }).catch((err) => {
        console.log(err);
    })
}


const updateData = async (req, res) => {
    const { name, email, id } = req.body;
    // console.log(req.body);
    const updateData = {
        name: name,
        email: email
    }

    const updateWhere = {
        user_id: id
    }
    await Modal.User.update(updateData, { where: updateWhere }).then((result) => {
        return res.send(result);
    }).catch((err) => {
        console.log(err);
    })
}


const destroyData = async (req, res) => {
    const { id } = req.body;
    const deleteParams = {
        user_id: id
    }
    await Modal.User.destroy({ where: deleteParams }).then((result) => {
        return res.json({ status: result });
    }).catch((err) => {
        console.log(err);
    })
}


module.exports = { home, getDummyData, createData, updateData, destroyData };