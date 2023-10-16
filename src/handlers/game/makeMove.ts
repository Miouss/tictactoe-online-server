import { MovePosition } from "@types";
import { io } from "@server";
import { GAME } from "@signals";
import { findLobbyById } from "./utils";

export async function makeMove(
  movePosition: MovePosition,
  currentPlayerId: string
) {
  try {
    const lobby = await findLobbyById(currentPlayerId);

    lobby.players.forEach((player) => {
      io.to(player.id).emit(GAME.MOVE_MADE, currentPlayerId, movePosition);
    });
  } catch (e) {
    console.error(e);
  }
}
