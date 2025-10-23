import { Submarino } from "./Submarino.js";

class Tablero {
  constructor() {
    this.size = 0;
    this.submarino = new Submarino();
    document.getElementById("bloque").innerHTML =
      document.getElementById("bloque").innerHTML + " El tablero se ha creado";
  }

  init(config) {
    this.size = config.size;
    this.submarino.init(this.size);
  }

  mover(submarino) {
	console.log("Se mueve");
    this.submarino.chooseMove();
  }

  comprobar(posicionX, posicionY) {
    this.x = this.submarino.getPositionX();
    this.y = this.submarino.getPositionY();	

    if (posicionX === this.x && posicionY === this.y) {
      console.log("Le has dado, hundido");
      return true;
    } else {
      console.log("Agua");
      this.mover();
      return false;
    }
  }
}

export { Tablero };
