import { Server } from "socket.io";
import http from "http";
import createApp from "./app.js"

const app = createApp()
const port = process.env.PORT;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    methods: ["GET"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected" + socket.id);
  socket.on("checked", (data) =>{
   socket.broadcast.emit('checked_receive', data)
  })
  socket.on("unchecked", (data) => {
    socket.broadcast.emit('unchecked_receive', data)
  })
});

server.listen(port, () => {
  console.log(`servidor iniciado na porta ${port}`);
});
