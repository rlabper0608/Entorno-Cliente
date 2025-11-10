import { UI } from "./UI.js";
import { GAMES, Game } from "./games/Game.js";

UI.init({
    board: 'gameBoard',
    status: 'gameStatus'
});

const gameInstance = Game(GAMES.Submarine, UI);
