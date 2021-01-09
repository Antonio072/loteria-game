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
  socket.on('timeInterval', (interval) => {
    console.log('client is interacting with time interval ', interval, ' ms');
    setInterval(() => {
      socket.emit('timer', new Date());
    }, interval);
  });
});

const port = 8000;
httpServer.listen(port);
console.log('listening on port ', port);

