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

    comprobar() {
        if(true){
            document.getElementById("disparo").innerHTML = "Has acertado! Quieres jugar otra vez?"
        }else{
            document.getElementById("disparo").innerHTML = "Has fallado prueba otra vez"
        }
    }
}

export {Tablero}