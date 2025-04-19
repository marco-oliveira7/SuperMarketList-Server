import express from "express";
import { Server } from "socket.io";
import http from "http";
const __dirname = import.meta.dirname

const app = express();
const port = process.env.PORT;
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("checked", (item) => {
    io.emit('checked', item)
  });
});

server.listen(port, () => {
  console.log(`servidor iniciado na porta ${port}`);
});
