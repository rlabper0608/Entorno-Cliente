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

    // this.x = Math.floor(Math.random() * size);
    // this.y = Math.floor(Math.random() * size);
    
  }

  mover(listaCeldas) {
    let numRandom = Math.floor(Math.random() * listaCeldas.length);

    let celda = listaCeldas[numRandom];

    celda.valor = 5;
    this.x = celda.x;
    this.y = celda.y;

    console.log("El submarino se ha movido");
  }
}

export { Submarino };
