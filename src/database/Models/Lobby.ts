import mongoose from "mongoose";
import { Player } from "@types";

interface LobbyDoc extends mongoose.Document {
  players: Player[];
}

const player = new mongoose.Schema<Player>({
  name: String,
  id: String,
});

export const lobby = new mongoose.Schema<LobbyDoc>({
  players: {
    type: [player],
    length: 2,
  },
});

export const Lobby = mongoose.model("Lobby", lobby);
