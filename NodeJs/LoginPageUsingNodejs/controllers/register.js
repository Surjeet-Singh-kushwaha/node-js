const db = require('../routes/dbconfig');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    const { name: username, email, password: npassword } = req.body;
    if (!email || !npassword) {
        return res.json({ status: 'error', error: "Please Enter your email and password" });
    }
    else {
        console.log(email)
        db.query('SELECT email FROM users WHERE email =?', [email], async (err, result) => {
            if (err) throw err;
            if (result[0]) return res.json({ status: 'error', error: "Email has already register" })
            else {
                const password = await bcrypt.hash(npassword, 8);
                console.log(password)
                db.query('INSERT INTO users SET ?', { name: username, email: email, password: password }, (err, result) => {
                     if(err) throw err;
                     return res.json({status:"success",success: `User Registered Successfully!`});
                })
            }
        })
    }

}

module.exports = register;