import { Lobby } from "@database";
import { io } from "@server";
import { Player } from "@types";
import { LOBBY } from "@signals";

export async function createLobby(player: Player) {
  try {
    const { _id } = await Lobby.create({ players: player });
    console.log(`${player.name} created a lobby`);

    const lobbyId = _id.toString();

    io.to(player.id).socketsJoin(lobbyId);
    io.in(lobbyId).emit(LOBBY.CREATED, player, lobbyId);
  } catch (e) {
    console.error(e);
  }
}
