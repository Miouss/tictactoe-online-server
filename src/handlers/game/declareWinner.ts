import { io } from "@server";
import { Player } from "@types";
import { findLobbyById, getPlayerNotMatching } from "./utils";
import { GAME } from "@signals";

export async function declareWinner(socketId: string) {
  try {
    const lobby = await findLobbyById(socketId);

    const players = lobby.players as Player[];
    const opponent = getPlayerNotMatching("id", socketId, players);

    io.to(socketId).emit(GAME.OVER, "win");
    io.to(opponent!.id).emit(GAME.OVER, "lose");
  } catch (err) {
    console.error(err);
  }
}
