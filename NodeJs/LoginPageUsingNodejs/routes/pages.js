const express = require("express");
const router = express.Router();
const logout = require('../controllers/logout');
const loggedIn = require('../controllers/loggedin')
router.get('/',loggedIn,(req, res)=>{
    if(req.user){
        res.render('index',{status:'loggedin',user:req.user})
    }else{
        res.render('index',{status:"notlogged",user:'no'});
    }
    
})
router.get('/register',(req, res)=>{
    res.sendfile('register.html',{root:"./public"});
})
router.get('/login',(req, res)=>{
    res.sendfile('login.html',{root:"./public"});
})
router.get('/logout',logout)
module.exports = router;