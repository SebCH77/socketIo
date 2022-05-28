const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

//Deploy public directory
app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  // console.log("Usuario conectado!");
  socket.emit("Welcome Message", {
    msg: "Welcome to the Server!",
    date: new Date(),
  });
  socket.on("client message", (data) => {
    console.log(data);
  });
});

server.listen(8080, () => console.log("Server run on port :8080"));
