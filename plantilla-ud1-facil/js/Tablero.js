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
		this.size = config.size;

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
		this.Gamesubmarine.init(this.size);
	}

	dispara(x, y) {
		if (this.submarino.x === x && this.submarino.y === y) {
			console.log("Has acertado");
			return true;
		}
		let celda = this.tablero.find(
			(item) => item.x === this.submarino.x && item.y === this.submarino.y
		);

		// this.tablero.forEach((item) => {
		//     if(item.valor !=0){
		//         item.valor -=1;
		//         console.log("Valor cambiado");
		//     }
		// })

		this.Gamesubmarine.move(celda.vecinos.filter((item) => item != null));

		return false;
	}

	
}
export { Tablero };
