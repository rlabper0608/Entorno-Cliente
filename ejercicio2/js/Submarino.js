import { Celda } from "./Celda.js";

class Submarino {
  constructor() {
    this.x = 0;
    this.y = 0;

    console.log("El submarino se ha creado");
  }

  init(size) {
    this.x = 12;
    this.y = 6;
  }

  mover(listaCeldas) {
    let numRandom = Math.floor(Math.random() * listaCeldas.length);

    console.log("Vecinos " + listaCeldas);

    let celda = listaCeldas[numRandom];

    console.log("Celda elegida Posicion X" + celda.x);
    console.log("Celda elegida Posicion Y" + celda.y);

    this.x = celda.x;
    this.x = celda.y;

    console.log("Posición nueva: " + this.x + this.y);
  }
}

export { Submarino };
