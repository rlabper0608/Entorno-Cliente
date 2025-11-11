export class GameSubmarine {
    constructor(UIControl) {
        this.UIControl = UIControl;
        this.UIControl.start(this);
        this.x = 0;
        this.y = 0;
    }

    init(size) {
        this.x = 12;
		this.y = 6;

		// this.x = Math.floor(Math.random() * size);
		// this.y = Math.floor(Math.random() * size);
    }

    shot() {
        // Lógica para manejar el disparo en el juego de submarinos
        // Actualizo interfaz
        console.log(this);
        this.UIControl.changeStatus("¡Disparo realizado!");
    }

    move(listaCeldas) {
		let numRandom = Math.floor(Math.random() * listaCeldas.length) - 1;

		let celda = listaCeldas[numRandom];

		// celda.valor = 7;
		this.x = celda.x;
		this.y = celda.y;

		console.log("El submarino se ha movido");
	}
}