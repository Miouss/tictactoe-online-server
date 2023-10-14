import { Lobby } from "@database";

export async function findLobbyById(id: string) {
  const lobby = await Lobby.findOne().where("players").elemMatch({ id });
  if (!lobby) throw "Lobby not found";
  return lobby;
}
