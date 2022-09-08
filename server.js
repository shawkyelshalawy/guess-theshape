
const express = require('express')
const app = express();
const socketIO= require('socket.io');
const path = require('path');
const morgan = require('morgan');
let sockets = [];
app.set("view engine" , "pug");
app.set("views",path.join(__dirname ,'./src/views'));
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'./src/static')))
app.get('/',(req,res)=>{
    res.render('home');
})




const port = 4000 ;
const server = app.listen(port , ()=>console.log(`server listening on port ${port}`));
const io = socketIO(server);
io.on("connection" , socket=>{
  socket.on("newMessage",({message})=>{
    socket.broadcast.emit("messageNotif",{message ,
       nickname:socket.nickname || "Anon"
      })
  });
  socket.on("setNickname" ,({nickname})=>{
    socket.nickname=nickname;
  })
});

