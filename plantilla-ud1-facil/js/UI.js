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
        UI.control.size = 5
    },
    setEvent: (domControl) => {
        // document.getElementById(domControl.clickCasilla[0]).addEventListener('click', ()=>{
        //     domControl.clickCasilla[1]();
        // });
    },
    start(game) {
        UI.game = game;
        
        UI.control.status.textContent = "Juego iniciado";
        this.creaGridTemplate(UI.control.size, game);
        // Creación del submarino
    },
    changeStatus(newStatus) {
        UI.control.status.textContent = newStatus;
    }, 
    creaGridTemplate(total,game) {
		UI.control.board.style.gridTemplateColumns = `repeat(${total}, 1fr)`;
		Array.from({ length: total * total }, (_, i) => {
			const clon = UI.control.template.content.cloneNode(true);
			const casilla = clon.querySelector(".casilla");
			casilla.textContent = ` ${(i % total) + 1}, ${Math.floor(i / total) + 1}`;
			casilla.addEventListener("click", (event) => {
				console.log(
					`Fila: ${casilla.dataset.fila}, Columna: ${casilla.dataset.columna}`
				);
				game.dispara(casilla.dataset.fila, casilla.dataset.columna);
			});
			casilla.dataset.fila = Math.floor(i / total);
			casilla.dataset.columna = i % total;
			UI.control.board.appendChild(clon);
		});
	}
}