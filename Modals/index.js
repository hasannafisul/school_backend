// Include Sequelize module.
const { Sequelize } = require('sequelize');
const client = require('../db_config');
const Schema = require('./Schema');

// Define method takes two arguments
// 1st - name of table
// 2nd - columns inside the table



const User = client.define('user_table', Schema.user_schema)

const Car = client.define('car_table', Schema.car_schema)

const Stock = client.define('3PLAND_', {

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
    stock_date: { type: Sequelize.DATE },
    stock_time: { type: Sequelize.TIME },
    ltp: { type: Sequelize.DOUBLE },
    buy_price: { type: Sequelize.DOUBLE },
    buy_qty: { type: Sequelize.DOUBLE },
    sell_price: { type: Sequelize.DOUBLE },
    sell_qty: { type: Sequelize.DOUBLE },
    ltq: { type: Sequelize.DOUBLE },
    open_interest: { type: Sequelize.DOUBLE },
});

const Master_Jobs = client.define('m_job', {
    job_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    job_name: {
        type: Sequelize.STRING,
        defaultValue: '-',
    },
    job_desc: {
        type: Sequelize.STRING,
        defaultValue: '-',
    },
    shift_start: {
        type: Sequelize.STRING,
        defaultValue: '-',
    },
    shift_end: {
        type: Sequelize.STRING,
        defaultValue: '-',
    },
    company: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    remark: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },

    cat_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    openings: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    posted_by: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    salary_start: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    salary_end: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    salary_due: {
        type: Sequelize.SMALLINT,
        defaultValue: 0,
    },
    city: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    state: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    approved: {
        type: Sequelize.SMALLINT,
        defaultValue: 0,
    },
    discount: {
        type: Sequelize.SMALLINT,
        defaultValue: 0,
    },
    job_type: {
        type: Sequelize.SMALLINT,
        defaultValue: 0,
    },
    is_deleted: {
        type: Sequelize.SMALLINT,
        defaultValue: 0,
    },
    created_by_admin: {
        type: Sequelize.SMALLINT,
        defaultValue: 0,
    },
    salary_due: {
        type: Sequelize.SMALLINT,
        defaultValue: 0,
    },
    posting_date_time: {
        type: Sequelize.DATE,
        defaultValue: new Date()
    },
    valid_from: {
        type: Sequelize.DATEONLY,
        defaultValue: null
    },
    expiry_date: {
        type: Sequelize.DATEONLY,
        defaultValue: null
    },
    admin_commission: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
    }
}
    , {
        freezeTableName: true,
        timestamps: false
    })


// const ActorMovies = client.define('ActorMovies', {
//     user_id: {
//         type: Sequelize.INTEGER,
//         references: {
//             model: User,
//             key: 'user_id'
//         }
//     },
//     ActorId: {
//         type: Sequelize.INTEGER,
//         references: {
//             model: Car,
//             key: 'id'
//         }
//     }
// });

Master_Jobs.hasMany(Master_Jobs, { foreignKey: 'job_id' })
// User(client).hasMany(Car, { foreignKey: 'id' });
Car.hasMany(User, { foreignKey: 'user_id' });
User.belongsTo(Car, { foreignKey: "user_id" });
// User(client).belongsToMany(Car, { through: 'ActorMovies' });

module.exports = { User, Car, Master_Jobs }
