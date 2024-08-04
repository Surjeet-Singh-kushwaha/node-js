require('dotenv').config();

const mysql = require('mysql');
const {DB_HOST,DB_USERNAME, DB_PASSWORD, DATABASE }=process.env;
 const db =mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database:DATABASE
})
db.connect((err)=>{
    if(err) console.log("some error in Connetion...");
    else{console.log("connected to the Database")}
})

console.log(DATABASE )
module.exports =db;