const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

//Deploy public directory
app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("Un usuario se ha conectado!");
});

server.listen(8080, () => console.log("Server run on port :8080"));
