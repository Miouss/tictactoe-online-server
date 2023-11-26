import { declareWinner } from "./declareWinner";
import { declareDraw } from "./declareDraw";
import { makeMove } from "./makeMove";
import { replayGame } from "./replayGame";
import { io } from "@server";
import { GAME } from "@signals";

export function handleGame() {
  io.on("connection", (socket) => {
    socket.on(GAME.MAKE_MOVE, makeMove);
    socket.on(GAME.WIN, declareWinner);
    socket.on(GAME.DRAW, declareDraw);
    socket.on(GAME.REPLAY, replayGame);
  });
}
