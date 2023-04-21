const client = require("./db_config")
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./Routes");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 5500;

app.listen(port, () => {
    console.log('Port running at ' + port);
})

client.query('CREATE DATABASE school_app')
    .then(() => console.log('Database created successfully'))
    .catch(err => console.error('Error creating database', err));

client.sync();

app.use('/v1', router);