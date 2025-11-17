import { UI } from "./UI.js";

UI.init({
	red: "red",
	green: "green",
	blue: "blue",
	yellow: "yellow",
	btn: "btn",
});

const colores = ["red", "blue", "yellow", "green"];

let secuenciaColores = [];
let secuencia = [];
let usuario = [];

const rojo = document.getElementById(colores[0]);
const azul = document.getElementById(colores[1]);
const amarillo = document.getElementById(colores[2]);
const verde = document.getElementById(colores[3]);
const btn = document.getElementById("btn");

const setEvent = () => {
	rojo.addEventListener("click", () => {
		usuario.push("red");
		console.log("rojo");
		if (secuenciaColores.length === usuario.length) {
			compara(secuenciaColores, usuario);
		}
	});

	azul.addEventListener("click", () => {
		usuario.push("blue");
		console.log("azul");
		if (secuenciaColores.length === usuario.length) {
			compara(secuenciaColores, usuario);
		}
	});

	amarillo.addEventListener("click", () => {
		usuario.push("yellow");
		console.log("amarillo");
		if (secuenciaColores.length === usuario.length) {
			compara(secuenciaColores, usuario);
		}
	});

	verde.addEventListener("click", () => {
		usuario.push("green");
		console.log("verde");
		if (secuenciaColores.length === usuario.length) {
			compara(secuenciaColores, usuario);
		}
	});

	btn.addEventListener("click", () => {
		jugar();
	});
};

// Ponemos para que los colores se puedan pulsar
const pulsarTecla = (conf) => {
	conf.tecla.style.opacity = 1;
	setTimeout(() => {
		conf.tecla.style.opacity = 0.5;
		setTimeout(() => {
			usarTecla.start();
		}, 2000);
	}, 2000);
};

const usarTecla = {
	lista: [],
	addTecla: (tecla) => {
		secuencia.push({ tecla: tecla });
		// El concat hace que podamos concatenar un array con el otro, entonces lo ponemos vacio y le añadimos el array de secuencia, para que podamos operar con lista
		usarTecla.lista = [].concat(secuencia);
	},
	start: () => {
		let teclaPulsada = usarTecla.lista.shift();
		if (teclaPulsada != undefined) pulsarTecla(teclaPulsada);
	},
};

// Creamos una función para que nos devuelva un numero aletarorio, y que esto nos devuelva uno de los 4 colores, para que se enciendan y apaguen de manera random
const aleatorio = () => {
	let numeroRandom = Math.floor(Math.random() * colores.length);
	console.log(numeroRandom);

	let colorSeleccionado = colores[numeroRandom];
	secuenciaColores.push(colorSeleccionado);

	usarTecla.addTecla(document.getElementById(colorSeleccionado));
};

setEvent();

const jugar = () => {
	btn.hidden = true;
	aleatorio();
	usarTecla.start();
};

/* Primero seria jugar una ronda unicamente, si hacierta volver a jugar, y si falla el juego termina */
const compara = (secuenciaColoresF, usuarioF) => {
	// Le permitimos clickar al usuario una vez que se llama a compara
	// La funcion array.every() se usa para verificar que los array sean iguales, le teneemos que pasar el valor(el color) y el indice es la posicion, y compara
	console.log(
		secuenciaColoresF.every((valor, indice) => valor == usuarioF[indice])
	);
	console.log(secuenciaColoresF);
	console.log(usuarioF);
	if (
		secuenciaColoresF.length === usuarioF.length &&
		secuenciaColoresF.every((valor, indice) => valor === usuarioF[indice])
	) {
		console.log("Acertaste la secuencia, siguiente nivel");
		usuario = [];
		jugar();
	} else {
		secuenciaColores = [];
		usuario = [];
		secuencia = [];
		btn.innerHTML = "Volver a jugar"
		btn.hidden = false;
		console.log("No has acertado, quieres volver a jugar?");
	}
};
