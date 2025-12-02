export class game {
	listButtons = [];
	list = [];
	secuenciaUsuario = [];
	constructor(UIControl) {
		this.UIControl = UIControl;
		this.UIControl.start(this);
		this.listButtons = this.UIControl.listButtons;
	}

	aleatorio() {
		console.log("aleatorio");
		let numeroRandom = Math.floor(Math.random() * this.listButtons.length);
		// console.log(numeroRandom);

		this.list.push(numeroRandom);
		// console.log(this.list);
	}

	change(element, status) {
		return new Promise((resolve) => {
			// console.log(element);
			setTimeout(() => {
				element.color.style.backgroundColor =
					status === this.UIControl.status.ON
						? element.colorOn
						: element.colorOff;
				resolve(true);
			}, 2000);
		});
	}

	async play() {
		console.log("play");
		// console.log(this.listButtons);
		this.aleatorio();
		this.UIControl.busy = true;
		this.removeEvent();

		for (let item of this.list) {
			// console.log(item);
			await this.change(this.listButtons[item], this.UIControl.status.ON);
			await this.change(this.listButtons[item], this.UIControl.status.OFF);
		}

		console.log("termine");
		this.UIControl.busy = false;
		this.setEvent();
	}

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
			console.log(this.secuenciaUsuario);
			this.play();
		} else {
			console.log("Vas bien");
			
		}
	}

	setEvent() {
		if (!this.UIControl.busy) {
			this.listButtons.forEach((item, index) => {
				// console.log(item);
				// console.log(index);
				item.color.addEventListener("click", () => {
					this.secuenciaUsuario.push(index);
					console.log(this.secuenciaUsuario);

					this.comprobar(this.secuenciaUsuario, this.list);
				});
			});
		}
	}

	removeEvent() {
		if (this.UIControl.busy) {
			this.listButtons.forEach((item, index) => {
				// console.log(item);
				// console.log(index);
				item.color.removeEventListener("click", () => {
					this.secuenciaUsuario.push(index);
				});
			});
		}
	}

	reiniciar() {
		console.log("reiniciar");
		this.list = [];
		this.secuenciaUsuario = [];
		this.UIControl.busy = false;
		this.removeEvent();
	}
}
