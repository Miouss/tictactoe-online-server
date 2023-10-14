import { findLobbyById, getPlayerNotMatching } from "./utils";
import { io } from "@server";
import { Player } from "@types";
import { GAME } from "signals";

export async function replayGame(socketId: string) {
  try {
    const lobby = await findLobbyById(socketId);

    const players = lobby.players as Player[];
    const opponent = getPlayerNotMatching("id", socketId, players);

    io.to(opponent!.id).emit(GAME.REPLAY);
  } catch (err) {
    console.error(err);
  }
}
