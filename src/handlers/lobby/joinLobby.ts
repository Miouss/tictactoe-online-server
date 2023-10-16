import { Lobby } from "@database";
import { io } from "@server";
import { Player } from "@types";
import { getPlayerBy } from "./utils";

import { LOBBY, PLAYER } from "@signals";

export async function joinLobby(joiningPlayer: Player, lobbyId: string) {
  try {
    const lobby = await Lobby.findById(lobbyId);
    if (!lobby) throw "Lobby not found";

    const players = lobby.players as Player[];

    const isPlayerAlreadyInLobby = getPlayerBy("id", joiningPlayer.id, players);
    if (isPlayerAlreadyInLobby)
      return io.to(joiningPlayer.id).emit(PLAYER.ALREADY_JOINED);

    const isLobbyFull = players.length === 2;
    if (isLobbyFull) return io.to(joiningPlayer.id).emit(LOBBY.FULL);

    const isPlayerNameTaken = getPlayerBy("name", joiningPlayer.name, players);
    if (isPlayerNameTaken)
      return io.to(joiningPlayer.id).emit(PLAYER.NAME_TAKEN);

    lobby.players.push(joiningPlayer);
    await lobby.save();

    io.to(joiningPlayer.id).socketsJoin(lobbyId);
    io.in(lobbyId).emit(PLAYER.JOINED, players, lobbyId);
  } catch (e) {
    io.to(joiningPlayer.id).emit(LOBBY.NOT_FOUND);
  }
}
