/**
 * dependencies
 */
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express')
const mysql = require('mysql');

/**
 * configs
 */
const app = express()
const port = 3000
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.json())

// check connection
conn.connect((err) => {
    if(err) {
        throw err;
    }
});

/**
 * endpoints
 */
require('./routes')(app, conn);

/**
 * listen
 */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})