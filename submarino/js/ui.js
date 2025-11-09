// import { Tablero } from "./Tablero.js";
import { Submarino } from "./Submarino.js";

export const UI = {
	status: null,
	sizes: null,
	table: null,
	casilla: null,
	submarino: null,

	init(config) {
		(UI.status = config.status),
			(UI.sizes = config.sizes),
			(UI.table = config.table),
			(UI.casilla = config.casilla),
			(UI.submarino = new Submarino(UI.sizes))
			
	},

	setStatus(message) {
		UI.status.innerHTML = message;
	},

	dispara(x,y){
        if(UI.submarino.x===x && UI.submarino.y===y){
            console.log("Has acertado");
            return true;
        }
		let casillaSubmarino = UI.table.find((casilla) =>casilla.dataset.fila===UI.submarino.x && casilla.dataset.columna===UI.submarino.y);

        this.submarino.mover(casillaSubmarino.vecinos.filter((item)=>item!=null))
        
        return false;
    },

	creaGridTemplate(total, plantilla, tabla) {
		tabla.style.gridTemplateColumns = `repeat(${total}, 1fr)`;
		Array.from({ length: total * total }, (_, i) => {
			const clon = plantilla.content.cloneNode(true);
			const casilla = clon.querySelector(".casilla");
			casilla.textContent = ` ${(i % total) + 1}, ${Math.floor(i / total) + 1}`;
			casilla.addEventListener("click", (event) => {
				console.log(
					`Fila: ${casilla.dataset.fila}, Columna: ${casilla.dataset.columna}`
				);
				UI.dispara(casilla.dataset.columna, casilla.dataset.fila);
			});
			casilla.dataset.fila = Math.floor(i / total);
			casilla.dataset.columna = i % total;
			tabla.appendChild(clon);
		});
	},
};
