const db = require("../routes/db_config");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const env = require('dotenv').config()


exports.login =async (req,res)=>{
    console.log(req.body)
    
}