
const express = require('express')
const app = express();
const socket= require('socket.io');
const path = require('path');
app.set("view engine" , "pug");
app.set("views",path.join(__dirname ,'./src/views'));
app.use(express.static(path.join(__dirname,'./src/static')))
app.get('/',(req,res)=>{
    res.render('home');
})


























const port = 4000 ;
const server = app.listen(port , ()=>console.log(`server listening on port ${port}`));
