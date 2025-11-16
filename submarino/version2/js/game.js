import { UI } from "./UI.js";
import { GameSubmarine } from "./GameSubmarine.js";

UI.init({
    board: 'gameBoard',
    status: 'gameStatus',
    casilla: "casilla",
    template: "casilla-template"
});

const gameInstance = new GameSubmarine(UI);
