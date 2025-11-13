import { Submarino } from "./Submarino.js";
import { Celda } from "./Celda.js";
import { Vecinos } from "./Celda.js";

class Tablero {
    constructor() {
        this.tablero = null;
        this.size = 0;
        this.submarino = new Submarino();
        console.log("El tablero se ha creado");
    }

    init(config) {
        this.size = config.size;
        this.creaGridTemplate(this.size, config.casilla, config.table);
        this.submarino.init(this.size);
    }

    dispara(x,y){
        if(this.submarino.x===x && this.submarino.y===y){
            console.log("Has acertado");
            return true;
        }
        let celda = this.tablero.find((item) =>item.x===this.submarino.x && item.y===this.submarino.y);
        
        // this.tablero.forEach((item) => {
        //     if(item.valor !=0){
        //         item.valor -=1;
        //         console.log("Valor cambiado");
        //     }
        // })

        this.submarino.mover(celda.vecinos.filter((item)=>item!=null))
        
        return false;
    }

    creaGridTemplate(total, plantilla, tabla) {
		tabla.style.gridTemplateColumns = `repeat(${total}, 1fr)`;
		Array.from({ length: total * total }, (_, i) => {
			const clon = plantilla.content.cloneNode(true);
			const casilla = clon.querySelector(".casilla");
			casilla.textContent = ` ${(i % total) + 1}, ${Math.floor(i / total) + 1}`;
			casilla.addEventListener("click", (event) => {
                console.log(
					`Fila: ${casilla.dataset.fila}, Columna: ${casilla.dataset.columna}`
				);
                this.dispara(casilla.dataset.columna, casilla.dataset.fila);				
			});
			casilla.dataset.fila = Math.floor(i / total);
			casilla.dataset.columna = i % total;
			tabla.appendChild(clon);
		});
	}

}

export { Tablero }