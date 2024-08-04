const express = require('express')

const db = require('./routes/dbconfig');

const app = express();
const PORT = process.env.PORT||3000;
const cookie = require('cookie-parser');
app.use(cookie());  // parse cookies
app.use("/js", express.static(__dirname + '/public/JS'))
app.use("/css", express.static(__dirname + '/public/CSS'))
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.json())
app.use('/', require('./routes/pages'))
app.use('/api',require('./controllers/auth'))
db.connect((err)=>{
    if(err) throw err;
    console.log("database connected successfully")
})

app.listen(PORT, () => {
  console.log("App is running at localhost:",PORT);
})