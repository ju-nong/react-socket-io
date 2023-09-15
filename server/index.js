// import express from "express";
// import { createServer } from "node:http";
// import { Server } from "socket.io";

const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);

// Vercel의 기본 포트는 80 or 443
const port = 443;

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

const chat = [];

app.get("/", (request, response) =>
    response.json({ path: "/", data: "Hello World!" }),
);

io.on("connection", (socket) => {
    const { id } = socket; // Socket에 고유 ID

    // [Server] Socket 연결 확인
    console.log(`a user connected ${id}`);

    // [Events] 연결 끊기 이벤트 등록
    socket.on("disconnect", () => {
        // [Server] Socket 연결 끊김 확인
        console.log(`user disconnected ${id}`);
    });

    // [Events] 메시지 전송 이벤트 등록
    socket.on("REQUEST MESSAGE", (message) => {
        // 채팅 업데이트
        chat.push({ id, message });

        // 모든 Socket한테 업데이트 된 채팅 전송
        socket.broadcast.emit("RESPONSE MESSAGE", chat);
        socket.emit("RESPONSE MESSAGE", chat);
    });

    // [Call] 연결된 Sokect한테 전체 채팅 전송
    socket.emit("RESPONSE MESSAGE", chat);
});

server.listen(port, () => console.log(`server running at port: ${port}`));

module.exports = server;
// export { server };
