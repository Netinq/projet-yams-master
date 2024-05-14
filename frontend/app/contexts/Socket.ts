import React from "react";
import { Platform } from 'react-native';
import io, { Socket } from "socket.io-client";

export const socketEndpoint: string = Platform.OS === 'web' ? "http://localhost:3000" : "http://10.60.107.92:3000";

export const socket: Socket = io(socketEndpoint, {
  transports: ["websocket"],
});;

export let hasConnection: boolean = false;

socket.on("connect", () => {
  console.log("connect: ", socket.id);
  hasConnection = true;
});

socket.on("disconnect", () => {
  hasConnection = false;
  console.log("disconnected from server"); // undefined
  socket.removeAllListeners();
});

export const SocketContext: React.Context<Socket> = React.createContext(socket);