export class game {
	listButtons = [];
	list = [];
	secuencia = [];
	constructor(UIControl) {
		this.UIControl = UIControl;
		this.UIControl.start(this);
		this.listButtons = this.UIControl.listButtons;
	}

	aleatorio() {
		console.log("aleatorio");
		let numeroRandom = Math.floor(Math.random() * this.listButtons.length);
		console.log(numeroRandom);

		let colorSeleccionado = listButtons[numeroRandom].color;
		this.list.push(colorSeleccionado);
	}

	change(element, status) {
		return new Promise((resolve) => {
			console.log(element);
			setTimeout(() => {
				element.id.style.backgroundColor =
					(status === this.UIControl.status.ON) ? element.colorOn : element.colorOff;
				resolve(true);
			}, 2000);
		});
	}

	play() {
		console.log("play");
		this.UIControl.busy = true;
		for (let item of this.list) {
			this.change(this.listButtons[item], this.UIControl.status);
			this.change(item, this.UIControl.status.OFF);
		}
		this.UIControl.busy = false;
	}
}
