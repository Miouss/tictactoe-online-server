import { io } from "@server";
import { Player } from "@types";
import { findLobbyById } from "./utils";
import { GAME } from "@signals";

export async function declareDraw(socketId: string) {
  try {
    const lobby = await findLobbyById(socketId);

    const players = lobby.players as Player[];
    players.forEach((player) => {
      io.to(player.id).emit(GAME.OVER, "draw");
    });
  } catch (err) {
    console.error(err);
  }
}
