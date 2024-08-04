const express = require('express');
const mysql = require('mysql');
const path = require('path');
const cookie = require('cookie-parser');
const db = require('./routes/db_config')
const app = express();

const env = require('dotenv').config()
// env.config({ path: './.env' })
// const db = mysql.createConnection({
//     host: process.env.DB_HOST,//or ip address at the production
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DATABASE
// })

// for setting path for the public directory
app.use(cookie())
const publicDirectory = path.join( __dirname + '/public')  //__dirname is a built-in variable that refers to the
app.use(express.static(publicDirectory));
app.use(express.urlencoded({ extended: false })) // to support URL-encoded bodies 
app.use(express.json()); // to support JSON-encoded bodies

// for telling node js which engine use for html

app.set('view engine','hbs');

db.connect((err) => {
    if (err) {
        console.log('some error occur')
        console.log(err)
    }
    else {
        console.log('My Sql is connected')
    }
})

//define routes
app.use('/',require('./routes/pages'))
app.use('/auth',require('./routes/auth'))
// app.get('/', (req, res) => {
//     res.render('index')
// })
// app.get('/register',(req,res)=>{
//     res.render( 'register') 
// })
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});