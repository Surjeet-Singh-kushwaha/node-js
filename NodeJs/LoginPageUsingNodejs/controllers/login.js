const db = require('../routes/dbconfig');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
require('dotenv').config();
const login = async (req, res) => {
    const { email, password } = req.body;  //destructuring assignment
    console.log(email,password)
    if (!email || !password) return res.json({ status: "error", error: "Please provide email and password" });
    else {
        db.query('select * from users where email =?', [email], async (err, result) => {
            if (err) throw err;
            if (!result[0] || ! await bcrypt.compare(password, result[0].password)) {
                return res.json({ status: 'error', error: "Incorrect Email and Password" })
            }else{
                const token = jwt.sign({ userId: result[0].id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES,
                    // httponly:true
                });   
                const cookieOptions = {
                    expiresIn:process.env.COOKIE_EXPIRES,
                    httponly:true
                }  //create a json web token for authentication
                res.cookie('userRegistered',token,cookieOptions);
                return res.json({statu:"success",success:"User has been logged In"});
            }
        
        })
    }
}

module.exports = login;