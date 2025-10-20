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
    }

    chooseMove() {
        const moves = [this.moveRight(), this.moveLeft(), this.moveUp(), this.moveDown()];
        const choose = Math.floor(Math.random * moves.length);
        moves[choose];
    }

    moveRight() {
        if(this.x+1 < this.size){
            this.x +=1;
        } else{
            chooseMove();
        }
    }

    moveLeft() {
        if(this.x-1 > 0){
            this.x -=1;
        } else{
            this.chooseMove();
        }
    }

    moveUp() {
        if(this.y+1 < this.size){
            this.y +=1;
        } else{
            this.chooseMove();
        }
    }

    moveDown() {
        if(this.y-1 > 0){
            this.y -=1;
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