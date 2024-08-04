let mysql = require('mysql');
require('dotenv').config();
const con = mysql.createConnection({
   host: process.env.DB_host,
   user:process.env.DB_user,
   password: process.env.DB_password,
   database: process.env.DB_database1 

})
con.connect((err)=>{
    if(err){
        console.log(err);
    }
console.log( "Connected!");
con.query('select * from student',(err,result)=>{
    if(err){
        console.log(err.message)
    }
    else{
        module.exports = result;
        console.log(result)
    }
})
})