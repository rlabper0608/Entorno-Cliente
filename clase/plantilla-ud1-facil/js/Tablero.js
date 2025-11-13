import { Celda } from "./Celda.js";
import { Vecinos } from "./Celda.js";

class Tablero {
	constructor() {
		this.tablero = null;
		this.size = 0;
	}

	init(config) {
		this.size = config;

		let malla = Array.from({ length: this.size }, (v, i) =>
			Array.from({ length: this.size }, (v, j) => new Celda(i, j))
		);

		malla.forEach((item, i) =>
			item.forEach((celda, j) => {
				if (i > 0) celda.nuevoVecino(Vecinos.ARRIBA, malla[i - 1][j]);
				if (i < this.size - 1)
					celda.nuevoVecino(Vecinos.ABAJO, malla[i + 1][j]);
				if (j > 0) celda.nuevoVecino(Vecinos.IZQUIERDA, malla[i][j - 1]);
				if (j < this.size - 1)
					celda.nuevoVecino(Vecinos.DERECHA, malla[i][j + 1]);
			})
		);

		this.tablero = malla.flat();
		return this.tablero;
	}
}

export { Tablero };
