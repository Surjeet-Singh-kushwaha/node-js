const db = require('../routes/dbconfig');
const bcrypt = require('bcryptjs');

const logout =(req,res)=>{
res.clearCookie("userRegistered");
res.redirect('/');  // redirect to home page after logging out
}

module.exports = logout;