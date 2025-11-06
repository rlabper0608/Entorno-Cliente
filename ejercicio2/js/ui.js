import { Tablero } from "./Tablero.js";

export const UI = {
	status: null,
	sizes: null,
	table: null,
	casilla: null,
	aux: null,
    tablero: new Tablero(),

	init(config) {
		UI.status = config.status,
		UI.sizes = config.sizes,
		UI.table = config.table;
		UI.casilla = config.casilla;
        UI.tablero.init(config);
	},

	setStatus(message) {
		UI.status.innerHTML = message;
	},

	
};
