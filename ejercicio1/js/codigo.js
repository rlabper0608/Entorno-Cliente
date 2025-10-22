import { Tablero } from "./Tablero.js";

// Mensaje sacado por pantalla para que el jugador decida de que tamaño sera el tablero donde jugará
const message = prompt("¿De que tamaño quieres crear el tablero?");

const config = {
	size: message
	// size: 20,
};

const tablero = new Tablero();
tablero.init(config);

let posicionX = 6;
let posicionY = 4;

let prueba = false;

// do {
// 	posicionX = prompt("Valor de X del disparo");
// 	posicionY = prompt("Valor de Y del disparo");
// } while (!prueba);

boton = document.getElementsById("btn-dispara");

addEventListener(onclick, boton); {
	posicionX = prompt("Valor de X del disparo");
	posicionY = prompt("Valor de Y del disparo");
<<<<<<< HEAD
    prueba = tablero.comprobar(posicionX, posicionY);
} while (!prueba);
=======
}


>>>>>>> 414f35580486ee9c1d21daa66404c22f645c9d15

tablero.comprobar(posicionX, posicionY);
