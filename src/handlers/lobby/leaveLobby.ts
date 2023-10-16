import { io } from "@server";
import { Player } from "@types";
import { removePlayerFromLobby } from "./utils";
import { PLAYER } from "@signals";

export async function leaveLobby(leavingPlayer: Player) {
  try {
    const { lobby, lobbyId } = await removePlayerFromLobby(leavingPlayer);

    const isLobbyEmpty = lobby.players.length === 0;

    if (isLobbyEmpty) {
      await lobby.delete();
      console.log(`Lobby deleted with last player: ${leavingPlayer.name}`);
    } else {
      const opponent = lobby.players[0];
      io.in(lobbyId).emit(PLAYER.OPPONENT_LEFT, opponent);
    }

    io.to(leavingPlayer.id).emit(PLAYER.LEFT);
  } catch (err) {
    console.error(err);
  }
}
