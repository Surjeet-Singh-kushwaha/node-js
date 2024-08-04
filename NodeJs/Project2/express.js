var express = require('express');
let bodyParser = require('body-parser');
var app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
// Set the directory for views
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.send('Welcome to Surjeet');
});
app.get('/About', (req, res) => {
  res.render('index')
});
app.post('/Add',(req,res)=>{
const userName = req.body.userName;
  res.send({Name:userName});
console.log(userName)
});
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});