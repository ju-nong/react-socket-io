import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const port = 5000;
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

app.get("/", (request, response) =>
    response.json({ path: "/", data: "Hello World!" }),
);

io.on("connection", (socket) => {
    const { id } = socket;
    console.log(`a user connected ${id}`);

    socket.on("disconnect", () => {
        console.log(`user disconnected ${id}`);
    });
});

server.listen(port, () => console.log(`server running at port: ${port}`));
