const io = require('socket.io-client');
const socket=io("http://127.0.0.1:3000");
socket.on('connect', () => {
    console.log(socket.id); // 'G5p5...'
  });