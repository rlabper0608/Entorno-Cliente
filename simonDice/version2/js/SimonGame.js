export class game {
	listButtons = [];
	list = [];
	secuenciaUsuario = [];
	recognition = null;
	colorHablado = null;

	constructor(UIControl) {
		this.UIControl = UIControl;
		this.UIControl.start(this);
		this.listButtons = this.UIControl.listButtons;
		this.UIControl.setEvent();
	}

	// Función que mete un número aleatorio en la lista que se va a reproducir
	aleatorio() {
		console.log("aleatorio");
		let numeroRandom = Math.floor(Math.random() * this.listButtons.length);

		this.list.push(numeroRandom);
	}

	// Función asincróna que se va esperando a que los botones se enciendan y se apaguen hasta que termine la secuencia entera que contiene el array
	async play() {
		console.log("play");
		this.aleatorio();
		this.UIControl.busy = true;

		for (let item of this.list) {
			await this.UIControl.change(this.listButtons[item], this.UIControl.status.ON);
			await this.UIControl.change(this.listButtons[item], this.UIControl.status.OFF);
		}
		this.UIControl.message.hidden = true;
		this.UIControl.busy = false;
		console.log("termine");
	}

	// Función para comprobar si la secuencia que va introduciendo el usuario es correcta
	comprobar(secuencia, lista) {
		for (let i = 0; i < secuencia.length; i++) {
			if (secuencia[i] !== lista[i]) {
				console.log("fallaste");
				this.reiniciar();
				return false;
			}
		}

		if (lista.length === secuencia.length) {
			console.log("Secuencia Correcta");
			this.secuenciaUsuario = [];
			this.play();
			this.UIControl.message.hidden = false;
			this.UIControl.message.innerHTML = "Acertaste!";
		} else {
			console.log("Vas bien");
		}
	}

	// Función que reinicia el juego una vez que el usuario pierde
	reiniciar() {
		console.log("reiniciar");
		this.list = [];
		this.secuenciaUsuario = [];
		this.UIControl.busy = false;
		this.UIControl.playButton.hidden = false;
		this.UIControl.btnHablar.hidden = true;
		this.UIControl.message.innerHTML = "Fallaste!";
	}
}
