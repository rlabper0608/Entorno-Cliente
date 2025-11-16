import { Submarino } from "./Submarino.js";
import { Tablero } from "./Tablero.js";

export class GameSubmarine {
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
		this.array = this.tablero.init(this.UIControl.control.size);
		console.log("Malla creada")
	}

	dispara(disparoX, disparoY) {
		if(this.submarino.x == disparoX && this.submarino.y == disparoY) {
            this.UIControl.changeStatus("¡Acertaste!");
			console.log("Has acertado");
			return true;
		}

		// Esto encuentra la celda donde esta el submarino
		let celdaSubmarino = this.array.find(
			(item) => item.x === this.submarino.x && item.y === this.submarino.y
			
		);

		let celdaDisparo = this.array.find(
			(item) => item.x === disparoX && item.y === disparoY
		);

		this.array.forEach(element => {
			if(element.valor != 0) {
				element.valor -= 1;
			}
		});

		this.submarino.mover(celdaSubmarino.vecinos.filter((item) => item != null));
		this.UIControl.changeStatus("¡Agua!" + "Rastro: " + celdaDisparo.valor);
	}
}