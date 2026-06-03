import { WebSocketServer } from "ws";
import { prisma } from "@repo/db";

const wss = new WebSocketServer({ port: 8081 });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    prisma.user.create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString(),
      },
    });
    ws.send(message);
  });
});

console.log("WebSocket server running on port 8081");
