import { Tablero } from "./Tablero.js";

// Mensaje sacado por pantalla para que el jugador decida de que tamaño sera el tablero donde jugará
// const message = prompt("¿De que tamaño quieres crear el tablero?");

const config = {
//   size: message,
	size: 20,
};

const tablero = new Tablero();
tablero.init(config);

let posicionX = 6;
let posicionY = 4;

console.log("Disparo")
console.log("Prueba CoordenadaX " + posicionX + " Coordenada Y: " + posicionY);

tablero.comprobar(posicionX, posicionY);

posicionX = 8;
posicionY = 9;

console.log("Disparo")
tablero.comprobar(posicionX, posicionY);


posicionX = 15;
posicionY = 2;

console.log("Disparo")
tablero.comprobar(posicionX, posicionY);


posicionX = 4;
posicionY = 16;

console.log("Disparo")
tablero.comprobar(posicionX, posicionY);

