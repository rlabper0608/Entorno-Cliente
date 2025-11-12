import { Celda } from "./Celda.js";
import { Vecinos } from "./Celda.js";
import { Submarino } from "./Submarino.js";


export class GameSubmarine {
        x = 0;
        y= 0;
        tablero= null;

    constructor(UIControl) {
        this.UIControl = UIControl;
        this.UIControl.start(this);
    }

    init(size) {
		this.submarino = new Submarino(size);

        this.malla(size);
    }

    // shot(x,y) {
    //     // Lógica para manejar el disparo en el juego de submarinos
    //     // Actualizo interfaz
    //     console.log(this);
    //     this.UIControl.changeStatus("¡Disparo realizado!");
    // }

    // setMove(listaCeldas) {
	// 	let numRandom = Math.floor(Math.random() * listaCeldas.length) - 1;

	// 	let celda = listaCeldas[numRandom];

	// 	// celda.valor = 7;
	// 	this.x = celda.x;
	// 	this.y = celda.y;


    //     this.UIControl.changeStatus("¡Agua!");
	// 	console.log("El submarino se ha movido");
	// }

    malla(size) {
		let malla = Array.from({ length: size }, (v, i) =>
			Array.from({ length: size }, (v, j) => new Celda(i, j))
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
	}

	dispara(disparoX, disparoY) {
        
		if(this.x === disparoX && this.y === disparoY) {
            this.UIControl.changeStatus("¡Acertaste!");
			console.log("Has acertado");
			return true;
		}

		// Esto encuentra la celda donde esta el submarino
		let celdaSubmarino = this.tablero.find(
			(item) => item.x === this.x && item.y === this.y
		);

		this.submarino.mover(celdaSubmarino.vecinos.filter((item) => item != null));

		return false;
	}
}