class Submarino {
    constructor() {
        this.x = 0;
        this.y = 0;
        document.getElementById("bloque").innerHTML = "El submarino se ha creado";
    }

    init(size) {
        this.size = size
        this.x = Math.floor(Math.random() * size) ;
        this.y = Math.floor(Math.random() * size);
        document.getElementById("posicion").innerHTML = "Posicion: " + this.x + ", " + this.y;
        console.log("Posicion inicial:" + this.x + ", " + this.y);
    }

    chooseMove() {
        //Creamos la variable que contiene un numeor aleatrio para seleccionar un movimiento al azar
        let random = Math.floor(Math.random() * 3);
        switch (random) {
            case 0:
                this.moveRight();
                break;
            case 1:
                this.moveLeft();
                break;
            case 2:
                this.moveUp();
                break;
            case 3:
                this.moveDown();
                break;
        }
    }

    moveRight() {
        if(this.x+1 < this.size){
            this.x +=1;
            console.log("derecha " + this.x + ", " + this.y);
        } else{
            chooseMove();
        }
    }

    moveLeft() {
        if(this.x-1 > 0){
            this.x -=1;
            console.log("izquierda " + this.x + ", " + this.y);
        } else{
            this.chooseMove();
        }
    }

    moveUp() {
        if(this.y+1 < this.size){
            this.y +=1;
            console.log("arriba " +this.x + ", " + this.y);
        } else{
            this.chooseMove();
        }
    }

    moveDown() {
        if(this.y-1 > 0){
            this.y -=1;
            console.log("abajo" + this.x + ", " + this.y);
        } else{
            this.chooseMove();
        }
    }

    getPositionX() {
        return this.x;
    }

    getPositionY() {
        return this.y;
    }
}

export {Submarino}