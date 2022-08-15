const express = require('express');
const cors = require('cors');
const app = express();
const socket = require('socket.io');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(8000, () => {
  console.log("Listening at Port 8000")
})

const io = socket(server, {
  cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
      allowedHeaders: ['*'],
      credentials: true,
  }
});

io.on("connection", socket => {
  console.log('socket id: ' + socket.id);
  socket.emit("Welcome", "Socket.io Connected!")
  
  socket.on("chat message", data => {
      // send a message with "data" to ALL clients EXCEPT for the one that emitted the
    //     "event_from_client" event
      console.log(data)
      socket.broadcast.emit("chat message", data);
  });
});