const Server = require("./models/server");

const server = new Server();

server.execute();

// io.on("connection", (socket) => {
//   // console.log("Usuario conectado!");
//   // socket.emit("Welcome Message", {
//   //   msg: "Welcome to the Server!",
//   //   date: new Date(),
//   // });
//   socket.on("message-to-server", (data) => {
//     console.log(data);
//     // socket.emit("message-from-server", data);
//     io.emit("message-from-server", data);
//   });
// });
