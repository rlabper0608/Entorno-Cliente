import { Tablero } from "./Tablero.js";

// Mensaje sacado por pantalla para que el jugador decida de que tamaño sera el tablero donde jugará
const message = prompt("¿De que tamaño quieres crear el tablero?");

const config = {
  size: message,
  // size: 20,
};

const tablero = new Tablero();
tablero.init(config);

let posicionX = 6;
let posicionY = 4;

let prueba = false;

posicionX = prompt("Dime la posición de X");
posicionY = prompt("Dime la posición de Y");

prueba = tablero.comprobar(posicionX, posicionY);

posicionX = document.getElementById("coordenadaX").innerHTML;
posicionY = document.getElementById("coordenadaY").innerHTML;

console.log("Posicion X: " + posicionX);
console.log("Posicion Y: " + posicionY);

// do {
//   posicionX = document.getElementById("coordenadaX").innerText;
//   posicionY = document.getElementById("coordenadaY").innerText;

//   console.log("Posicion X " + posicionX);
//   console.log("Posicion Y " + posicionY);

//   prueba = tablero.comprobar(posicionX, posicionY);
// } while (!prueba);
