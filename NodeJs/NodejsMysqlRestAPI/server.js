const express = require('express');
const env = require('dotenv');
const cors = require('cors');
require('./config/dbConnection')
env.config();
const app = express();

app.use(cors())
// err handling code
app.use((err,req,res,nect)=>{
    err.statusCode =err.statusCode||500;
    err.message = err.message||'Inernam=l server error';
    res.status(err.statusCode).json({
message:err.message,
    });
})
app.get('/',(req,res)=>{
    res.send('welcome to my page')
})

app.listen(3000,()=>{
    console.log('App is running at loccalhost 3000')
})