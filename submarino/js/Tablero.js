import { Submarino } from "./Submarino.js";
import { Celda } from "./Celda.js";
import { Vecinos } from "./Celda.js";

class Tablero {
	constructor() {
		this.tablero = null;
		this.size = 0;
		this.submarino = new Submarino();
		console.log("El tablero se ha creado");
	}

	init(config) {
		this.submarino.init(this.size);
	}
}

export { Tablero };
