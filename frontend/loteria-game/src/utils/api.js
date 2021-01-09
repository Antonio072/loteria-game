const io = require("socket.io-client");
const socket = io("http://localhost:8000", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

function socketConnector(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('timeInterval', 1000);
}
export { socketConnector };