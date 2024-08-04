let express = require('express');


let app = express();
let port =3000;
let host = 'localhost';
app.get('/',(req , res)=>{
    res.send("Hello thi si");
})
app.get('/blog',(req,res)=>{
    res.send("Welcom to my website")
})
app.get('/blog/:slug',(req , res)=>{
    res.send(`Hello ${req.params.slug}`);
})
app.listen(port,()=>{
    console.log(`App is Running at : localhost ${port}`)
})