const {addUser, removeUser, getUser, getUsersInRoom, generateMessage} = require('./utils/users')
const httpServer = require("http").createServer();
const io = require('socket.io')(httpServer, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
});

io.on('connection', (socket) => {
  
  console.log('New Web Socket Connection')

  socket.on('timeInterval', (interval) => {
    console.log('client is interacting with time interval ', interval, ' ms')
    setInterval(() => {
      socket.emit('timer', new Date());
    }, interval)
  })

  socket.on('join', (options, callback)=>{
      const {error, user} = addUser({ id: socket.id, ...options})
      if(error){
          return callback(error)
      }
      socket.join(user.room)
      socket.emit('message', generateMessage('', 'Welcome' + user.username + '!'))
      socket.broadcast.to(user.room).emit('message', generateMessage('', user.username + ' has joined the game'))    
      io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUsersInRoom(user.room)
      })
          
      callback()
  })

  socket.on('disconnect',()=>{
      const user = removeUser(socket.id)
      if(user){
        io.to(user.room).emit('message', generateMessage('', user.username + ' has left the game'))
        io.to(user.room).emit('roomData', {
          room: user.room,
          users: getUsersInRoom(user.room)
        })
      }
  })

})

const port = 8000
httpServer.listen(port)
console.log('listening on port ', port)

