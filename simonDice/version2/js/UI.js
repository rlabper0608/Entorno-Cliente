export const UI = {
	control: {
		red: null,
		green: null,
		blue: null,
		yellow: null,
		secuencia: [],
		colores: [],
	},

	init: (domControl) => {
		UI.control.red = document.getElementById(domControl.red);
		UI.control.green = document.getElementById(domControl.green);
		UI.control.blue = document.getElementById(domControl.blue);
		UI.control.yellow = document.getElementById(domControl.yellow);
		UI.control.colores = [
			UI.control.red,
			UI.control.blue,
			UI.control.yellow,
			UI.control.green,
		];
	},
	pulsarTecla: (conf) => {
		conf.tecla.style.opacity = 1;
		setTimeout(() => {
			conf.tecla.style.opacity = 0.5;
			setTimeout(() => {
				usarTecla.start();
			}, 2000);
		}, 2000);
	},
	aleatorio: () => {
		let numeroRandom = Math.floor(Math.random() * UI.control.colores.length);
		console.log(numeroRandom);

		let colorSeleccionado = UI.control.colores[numeroRandom];

		usarTecla.addTecla(document.getElementById(colorSeleccionado));
	},
	usarTecla: {
		lista: [],
		addTecla: (tecla) => {
			usarTecla.lista.push({ tecla: tecla });
			secuencia.push({ tecla: tecla });
		},
		start: () => {
			let teclaPulsada = usarTecla.lista.shift();
			if (teclaPulsada != undefined) pulsarTecla(teclaPulsada);
		},
	},
};
