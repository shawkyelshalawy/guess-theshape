const socket = io('/');
socket.on("Hellooo bitch" ,()=>{
    console.log("Somebody Joined")
})

setTimeout(()=>socket.emit("Hello guys"),4000);