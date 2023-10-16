import { io } from "@server";
import { createLobby } from "./createLobby";
import { joinLobby } from "./joinLobby";
import { leaveLobby } from "./leaveLobby";
import { LOBBY } from "@signals";

export function handleLobby() {
  io.on("connection", (socket) => {
    socket.on(LOBBY.CREATE, createLobby);
    socket.on(LOBBY.JOIN, joinLobby);
    socket.on(LOBBY.LEAVE, leaveLobby);
  });
}
