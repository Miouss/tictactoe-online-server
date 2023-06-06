import { Lobby } from "@database";
import { io } from "@server";
import { Player } from "@types";

export async function removePlayerFromLobby(currentPlayer: Player) {
  const filter = {
    players: {
      $elemMatch: {
        name: currentPlayer.name,
      },
    },
  };
  const update = { $pull: { players: { name: currentPlayer.name } } };
  const options = { new: true };

  const lobby = await Lobby.findOneAndUpdate(filter, update, options);
  if (!lobby) throw `${currentPlayer.name} is not in a lobby`;

  const lobbyId = lobby._id.toString();

  io.in(currentPlayer.id).socketsLeave(lobbyId);
  console.log(`${currentPlayer.name} left the lobby`);

  return { lobby, lobbyId };
}
