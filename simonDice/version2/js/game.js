export class game {
    constructor() {
        this.lista = [];
    }

    usarTecla(secuencia, UI) {

		addTecla = (tecla) => {
			this.lista.push({ tecla: tecla });
			secuencia.push({ tecla: tecla });
		}

		start = () => {
			let teclaPulsada = this.lista.shift();
			if (teclaPulsada != undefined) UI.pulsarTecla(teclaPulsada);
		}
	}
}