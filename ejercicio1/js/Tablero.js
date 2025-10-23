import { Submarino } from "./Submarino.js";

class Tablero {
  constructor() {
    this.tablero = null;
    this.size = 0;
    this.submarino = new Submarino();
    document.getElementById("bloque").innerHTML =
      document.getElementById("bloque").innerHTML + " El tablero se ha creado";
  }

  init(config) {
    this.size = config.size;
    this.submarino.init(this.size);
    this.crear(this.size);
    this.meterSubmarino(this.submarino);
  }

  // Funcion que me crea un array biodimensional para hacer el tablero de juego
  crear(size) {
    this.tablero = Array.from({ length: size }, (v, i) =>
      Array.from({ length: size }, (v, i) => 0)
    );
    console.log(this.tablero);
  }

  meterSubmarino(submarino) {
    this.x = submarino.getPositionX();
    this.y = submarino.getPositionY();
    this.tablero[this.x][this.y] = 1;
  }

  mover(submarino) {
    this.borrar();
    submarino.chooseMove();
    this.meterSubmarino(submarino);
    console.log("movimiento");
    console.log(this.tablero);
  }

  comprobar(posicionX, posicionY) {
    if (posicionX === this.x && posicionY === this.y) {
      document.getElementById("disparo").innerHTML =
        "Has acertado! Quieres jugar otra vez?";
      return true;
    } else {
      document.getElementById("disparo").innerHTML =
        "Has fallado prueba otra vez";
      this.mover(this.submarino);
      return false;
    }
  }

  borrar() {
    this.x = this.submarino.getPositionX();
    this.y = this.submarino.getPositionY();
    this.tablero[this.x][this.y] = 0;
  }
}

export { Tablero };
