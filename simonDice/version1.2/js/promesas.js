const colores = ["red", "blue", "yellow", "green"];

function promesa() {
	let ejemplo = new Promise((resolve, reject) => {
		console.log("Estoy en la promesa");

		setTimeout(() => {
			resolve("Han pasado dos segundos");
		}, 2000);
	});
	return ejemplo;
};

async function ejemplo() {
	console.log("Hago una llamada");
	let resultado = await promesa();
	console.log(resultado);
	console.log("He terminado de llamar");
};

// ejemplo();xº

const rojo = document.getElementById(colores[0]);

// function cambiaColor(conf) {
// 	let cambio = new Promise((resolve, reject) => {
// 		console.log("Estoy dentro del cambio de color");
// 		conf.style.opacity = 1;
// 		setTimeout(() => {
// 			conf.style.opacity = 0.5;
// 			resolve("He cambiado el color");
// 		}, 2000);
// 	});
// 	return cambio;
// }

// async function llamadaCambioColor(color) {
// 	// let hola = await cambiaColor(color);
// 	let hola = await cambioColorInterval(color);
// 	console.log(hola);
// 	console.log("He terminado de cambiar el color");
// }

// llamadaCambioColor(rojo);

// function cambioOpacidad(tecla, nivel) {
// 	tecla.style.opacity = nivel;
// 	clearInterval(intervalID);
// }

// var intervalID;

// function cambioColorInterval(conf) {
// 	let cambio = new Promise(() => {
// 		console.log("Estoy dentro del cambio de color por intervalo");

// 		intervalID = setInterval(cambioOpacidad, 2000, conf, 1);
// 	});
// }

let busy = false;
const statusOP = {
    ON: 1,
    OFF: 0.5
};

const change = (element, status) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			let opacity = statusOP.OFF;
            console.log(opacity);
			if (status === statusOP.ON) opacity = status;
            console.log(opacity);
            console.log(element);
			element.style.opacity = opacity;
		}, 2000);
		resolve(true);
	});
};

const play = () => {
    busy = true;
	secuencia.forEach(async (item) => {
		await change(listButtons[colores[item]], statusOP.ON);
		await change(listButtons[colores[item]], statusOP.OFF);
	});
    busy = false;
};

let listButtons = {
    red: document.getElementById("red"),
    blue: document.getElementById("blue"),
    yellow: document.getElementById("yellow"),
    green: document.getElementById("green"),
};

let secuencia = [0,1,1,2,3];
play();