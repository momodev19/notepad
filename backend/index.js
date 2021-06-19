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