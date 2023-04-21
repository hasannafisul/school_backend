const { Sequelize } = require("sequelize")

const college_table = {
    c_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        required: true
    },
    website: {
        type: Sequelize.STRING,
        default: '-'
    },
    board: {
        type: Sequelize.INTEGER,
        required: true
    },
    branch: {
        type: Sequelize.STRING,
        required: true
    },
    desc: {
        type: Sequelize.STRING,
        default: "-"
    },
    address: {
        type: Sequelize.STRING,
        required:true
    },
    state:{
        type:Sequelize.INTEGER,
        required:true
    },
    city:{
        type:Sequelize.INTEGER,
        required:true
    },
    lat:{
        type:Sequelize.INTEGER,
        required:true
    },
    lng:{
        type:Sequelize.INTEGER,
        required:true
    },
    fcm_id:{
        type:Sequelize.STRING,
        required:true
    },
    ip:{
        type:Sequelize.INTEGER,
        required:true
    },
    status:{
        type:Sequelize.INTEGER,
        required:true
    },
    logo:{
        type:Sequelize.INTEGER,
        required:true
    }
}

const user_schema = {
    // Column-1, user_id is an object with
    // properties like type, keys,
    // validation of column.
    user_id: {

        // Sequelize module has INTEGER Data_Type.
        type: Sequelize.INTEGER,

        // To increment user_id automatically.
        autoIncrement: true,

        // user_id can not be null.
        allowNull: false,

        // For uniquely identify user.
        primaryKey: true
    },

    // Column-2, name
    name: { type: Sequelize.STRING, allowNull: false },

    // Column-3, email
    email: { type: Sequelize.STRING, allowNull: false },

    // Column-4, default values for
    // dates => current time
    myDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },

    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}

const car_schema = {

    // Column-1, user_id is an object with
    // properties like type, keys,
    // validation of column.
    id: {

        // Sequelize module has INTEGER Data_Type.
        type: Sequelize.INTEGER,

        // To increment user_id automatically.
        autoIncrement: true,

        // user_id can not be null.
        allowNull: false,

        // For uniquely identify user.
        primaryKey: true
    },

    // Column-2, name
    name: { type: Sequelize.STRING, allowNull: false },

    // Column-3, email
    email: { type: Sequelize.STRING, allowNull: false },

    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}

module.exports = { user_schema, car_schema }