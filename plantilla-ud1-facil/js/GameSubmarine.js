import { Submarino } from "./Submarino.js";
import { Tablero } from "./Tablero.js";

export class GameSubmarine {
        x = 0;
        y= 0;
        tablero = null;
		array = null;

    constructor(UIControl) {
        this.UIControl = UIControl;
        this.UIControl.start(this);
		this.submarino = new Submarino();
		this.submarino.init(UIControl.control.size);
		this.tablero = new Tablero();
		this.creaTablero();
    }

	creaTablero() {
		;
		console.log("hola")
		this.array = this.tablero.init(this.UIControl.control.size);
		console.log(this.array)
	}

	dispara(disparoX, disparoY) {
		console.log(this.submarino.x, this.submarino.y);
		if(this.submarino.x === disparoX && this.submarino.y === disparoY) {
            this.UIControl.changeStatus("¡Acertaste!");
			console.log("Has acertado");
			return true;
		}

		console.log(this.tablero);

		// Esto encuentra la celda donde esta el submarino
		let celdaSubmarino = this.tablero.find(
			(item) => item.x === this.x && item.y === this.y
		);

		this.submarino.mover(celdaSubmarino.vecinos.filter((item) => item != null));

		return false;
	}
}