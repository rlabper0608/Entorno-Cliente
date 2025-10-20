import { Tablero } from "./Tablero.js";

// Mensaje sacado por pantalla para que el jugador decida de que tamaño sera el tablero donde jugará
// const message = prompt("¿De que tamaño quieres crear el tablero?");

const config = {
    // size: message
    size: 20
}

const tablero = new Tablero();
tablero.init(config);

const posicionX = prompt("Valor de X del disparo");
const posicionY = prompt("Valor de Y del disparo");


tablero.comprobar(posicionX, posicionY);