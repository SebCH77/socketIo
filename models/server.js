const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");

class Server {
  constructor() {
    this.app = express(); //Curious fact: Propiedad de clase.
    this.port = process.env.PORT;

    this.server = http.createServer(this.app);
    this.io = socketio(this.server, {
      /* ...configs*/
    });
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));
  }

  configurarSockets() {
    new Sockets(this.io);
  }

  execute() {
    //Init middlewares
    this.middlewares();

    //Init sockets
    this.configurarSockets();

    //Init server
    this.server.listen(this.port, () => console.log("Server run on port :", this.port));
  }
}

module.exports = Server;
