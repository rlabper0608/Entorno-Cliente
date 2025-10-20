import { Submarino } from "./Submarino.js"

class Tablero {
    constructor() {
        this.size = 0;
        this.submarino = new Submarino();
        document.getElementById("bloque").innerHTML = document.getElementById("bloque").innerHTML + " El tablero se ha creado";
    }

    init(config) {
        this.size = config.size;
        this.submarino.init(this.size);
    }
}

export {Tablero}