export const UI = {
    game : null,
    control : {
        board: null,
        status: null,
        casilla:null,
        size:null,
    },
    init: (domControl, game)=>{
        UI.control.board = document.getElementById(domControl.board);
        UI.control.status = document.getElementById(domControl.status);
        UI.control.casilla = document.getElementsByClassName(domControl.casilla)
        UI.control.template = document.getElementById(domControl.template)
        UI.control.size = 20
    },
    setEvent: (domControl) => {
        document.getElementById(domControl.btnShot[0]).addEventListener('click', ()=>{
            domControl.btnShot[1]();
        });
    },
    start(game) {
        UI.game = game;
        // Creación del submarino
        UI.game.init(UI.control.size);
        UI.control.status.textContent = "Juego iniciado";
    },
    changeStatus(newStatus) {
        UI.control.status.textContent = newStatus;
    }, 
    creaGridTemplate(total) {
		UI.control.board.style.gridTemplateColumns = `repeat(${total}, 1fr)`;
		Array.from({ length: total * total }, (_, i) => {
			const clon = UI.control.template.content.cloneNode(true);
			const casilla = clon.querySelector(".casilla");
			casilla.textContent = ` ${(i % total) + 1}, ${Math.floor(i / total) + 1}`;
			casilla.addEventListener("click", (event) => {
				console.log(
					`Fila: ${casilla.dataset.fila}, Columna: ${casilla.dataset.columna}`
				);
				
			});
			casilla.dataset.fila = Math.floor(i / total);
			casilla.dataset.columna = i % total;
			tabla.appendChild(clon);
		});
	}
}