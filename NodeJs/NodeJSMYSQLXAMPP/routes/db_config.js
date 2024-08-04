const mysql = require('mysql');
const env = require('dotenv').config()
const db = mysql.createConnection({
    host: process.env.DB_HOST,//or ip address at the production
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
})

module.exports=db;