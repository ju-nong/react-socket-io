import { io } from "socket.io-client";

// 로컬에서 테스트할 때, http://localhost:5000 로 변경해서 하면 됨
export const socket = io("https://react-socket-io-server.vercel.app");
