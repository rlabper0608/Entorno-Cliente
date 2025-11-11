import { UI } from "./UI.js";
import { GameSubmarine } from "./GameSubmarine.js";

UI.init({
    board: 'gameBoard',
    status: 'gameStatus',
    casilla: "casilla",
    template: "casilla-template"
});

const gameInstance = new GameSubmarine(UI);
gameInstance.creaGridTemplate(20);

UI.setEvent({
    btnShot: ['btnShot', ()=> gameInstance.shot()]
});

/* Esto es otra forma, cuidado con la perdida del contexto this.
/*
UI.setEvent({
    btnShot: ['btnShot', gameInstance.shot.bind(gameInstance)]
});
*/

