const express = require('express');
const cors = require('cors');
const app = express();
const socket = require('socket.io');  // SOCKET.IO

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');
require('./routes/authors.routes')(app);

const server = app.listen(8000, () => {
  console.log("Listening at Port 8000")
})


 // SOCKET.IO
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
  
  socket.on("updateAuthors", data => {
      console.log(data)
      socket.broadcast.emit("updateAuthors", data);
  });
});