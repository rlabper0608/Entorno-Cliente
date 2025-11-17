export const UI = {
	game: null, 
	control: {
		red: null,
		green: null,
		blue: null,
		yellow: null,
		secuencia: [],
		colores: [],
		secuenciaColores: [],
		btn: null
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
};
