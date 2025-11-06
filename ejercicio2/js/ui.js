export const UI = {
	status: null,
	sizes: null,
	table: null,
	casilla: null,
	aux: null,

	init(config) {
		UI.status = config.status,
		UI.sizes = config.sizes,
		UI.table = config.table;
		UI.casilla = config.casilla;
	},

	setStatus(message) {
		UI.status.innerHTML = message;
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
                this.Tablero.dispara(casilla.dataset.columna, casilla.dataset.fila);				
			});
			casilla.dataset.fila = Math.floor(i / total);
			casilla.dataset.columna = i % total;
			tabla.appendChild(clon);
		});
	},
};
