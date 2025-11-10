export const UI = {
    game : null,
    control : {
        board: null,
        status: null
    },
    init: (domControl, game)=>{
        UI.control.board = document.getElementById(domControl.board);
        UI.control.status = document.getElementById(domControl.status);
    },
    start(game) {
        UI.game = game;
        UI.control.status.textContent = "Juego iniciado";
    },
    changeStatus(newStatus) {
        UI.control.status.textContent = newStatus;
    }
}