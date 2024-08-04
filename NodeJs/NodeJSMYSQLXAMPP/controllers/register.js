const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const env = require('dotenv').config()
const db = mysql.createConnection({
    host: process.env.DB_HOST,//or ip address at the production
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
})


exports.register = (req, res) => {
    // console.log(req.body);
    // const name = req.body.name;
    // const email=req.body.email;
    // const password = req.body.password;
    // const passwordconfirm = req.body.confirmpassword;
    const { name, email, password, confirmpassword } = req.body;

    db.query('SELECT email FROM users where email =?', [email], async function (err, results) {
        if (err) {
            console.log(err)
        }

        if (results.length > 0) {
            console.log('result length is grater than 0')
            return res.render('register', { message: "Email is already in use!" });
        }
        else if (password != confirmpassword) {
            console.log(password, " and ", confirmpassword, "are not same");
            return res.render('register', { message: 'Passwords do not match!' });
        }

        console.log("else block");
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query('INSERT INTO users SET ?', { name: name, email: email, password: hashedPassword }, (err, results) => {
            if (err) {
                console.log(err)
            }
            else {
                res.render('register', { message: "User Regitered" })
            }
        });



    })
}

