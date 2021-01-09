const qs = require('qs')
const io = require("socket.io-client");
const socket = io("http://localhost:8000", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

function socketConnector(cb) {
const {username, room} = qs.parse(location.search, { ignoreQueryPrefix:true})
  
socket.emit('join',{username, room}, (error)=>{
    if(error){
        alert(error)
        //location.href = '/'
    }
  })

  socket.emit('timeInterval', 1000);

  socket.on('message', (message)=>{
    console.log(message)
  })

  socket.on('timer', timestamp => cb(null, timestamp));

}


export { socketConnector };