import { Submarino } from "./Submarino.js";

class Tablero {
	constructor() {
		this.size = 0;
		this.submarino = new Submarino();
		document.getElementById("bloque").innerHTML =
			document.getElementById("bloque").innerHTML + " El tablero se ha creado";
	}

	init(config) {
		this.size = config.size;
		this.submarino.init(this.size);
		this.matriz = [];
		this.crear(this.size);
		this.meterSubmarino(this.submarino);
	}

	// Funcion que me crea un array biodimensional para hacer el tablero de juego
	crear(size) {
		for (let i = 0; i < size; i++) {
			this.matriz[i] = [];
			for (let j = 0; j < size; j++) {
				this.matriz[i][j] = 0;
			}
		}
		console.log(this.matriz);
	}

	meterSubmarino(submarino) {
		this.x = submarino.getPositionX();
		this.y = submarino.getPositionY();
		this.matriz[this.x][this.y] = 1;
	}

	mover(submarino) {
		submarino.chooseMove();
        this.meterSubmarino(submarino);
        console.log("movimiento")
        console.log(this.matriz)
	}

	comprobar(posicionX, posicionY) {
		if (posicionX === this.x && posicionY === this.y) {
			document.getElementById("disparo").innerHTML =
				"Has acertado! Quieres jugar otra vez?";
		} else {
			document.getElementById("disparo").innerHTML =
				"Has fallado prueba otra vez";
                this.mover(this.submarino)
		}
	}

}

export { Tablero };
