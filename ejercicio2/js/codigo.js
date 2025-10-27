import { Tablero } from "./Tablero.js";
const config ={
    size:20
}
const tablero = new Tablero();
tablero.init(config);
tablero.dispara(3,3);
tablero.dispara(5,3);
tablero.dispara(12,15);

