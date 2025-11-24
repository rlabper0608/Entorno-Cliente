export const UI = {
	game: null, 
	control: {
		red: null,
		green: null,
		blue: null,
		yellow: null,
		secuencia: [],
		colores: [],
		btn: null,
		status: {
			ON: 1,
			OFF: 0.5,
		},
		busy: false
	},

	init: (domControl) => {
		UI.control.red = document.getElementById(domControl.red);
		UI.control.green = document.getElementById(domControl.green);
		UI.control.blue = document.getElementById(domControl.blue);
		UI.control.yellow = document.getElementById(domControl.yellow);
		UI.control.btn = document.getElementById(domControl.btn);
		UI.control.colores = [
			domControl.red,
			domControl.blue,
			domControl.yellow,
			domControl.green,
		];
	},
	aleatorio: () => {
		let numeroRandom = Math.floor(Math.random() * UI.control.colores.length);
		console.log(numeroRandom);

		let colorSeleccionado = UI.control.colores[numeroRandom];

		usarTecla.addTecla(document.getElementById(colorSeleccionado));
	},

	change: (element,status) => {
		let obj = new Promise ((resolve) => {

			setTimeout(()=> {
				let opacity = status.OFF
				if (status === UI.control.status.ON) opacity = status.ON
				element.style.opacity = opacity;
				
			},2000);
			resolve(true);
		})
	},

	play: () => {
		UI.control.busy = true;
		secuencia.forEach( async (item) => {
			await change(secuencia[item], UI.control.status.ON);
			await change(secuencia[item], UI.control.status.OFF);
		});
		UI.control.busy = false;
	}
};


