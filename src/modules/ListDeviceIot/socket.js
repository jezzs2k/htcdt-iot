import io from "socket.io-client";

const socket = io.connect('http://c8a85acd765f.ngrok.io');

socket.on("connect", () => {
  console.log(socket.id);
});

export default socket;