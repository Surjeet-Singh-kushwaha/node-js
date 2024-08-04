const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session')
let faculty = require('./routes/faculty.js')
let app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/faculty', faculty)
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// for session
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}))

app.get('/', (req, res) => {
    res.render('Homepage')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', (req, res) => {
    console.log('Req accepted')
    let userEmail = req.body.email;
    let userPassword = req.body.password;
    if (userEmail == 'surjeetsingh60h@gmail.com' && userPassword == '12345') {
        console.log('Logged In Successfully!')
        req.session.authenticated = true;
        req.session.userEmail = userEmail;
        req.session.username ="Surjeet Singh"
        res.redirect('/dashboard');
    }
    else {
        res.redirect('/login')
    }

});
// for Faculty Dashboard
app.get('/dashboard', (req, res) => {
    if (req.session.authenticated) {
        res.render('FacultyDashBoard', { email: req.session.userEmail ,username:req.session.username })
    }
    else {
        res.redirect('/login');
    }
})
app.listen(port, () => {
    console.log("App is Running")
})