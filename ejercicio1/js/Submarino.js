class Submarino {
    constructor() {
        this.x = 0;
        this.y = 0;
        document.getElementById("bloque").innerHTML = "El submarino se ha creado";
    }

    init(size) {
        this.x = Math.floor(Math.random() * size) ;
        this.y = Math.floor(Math.random() * size);
    }

    chooseMove() {
        moves = [moveRight(), moveLeft(), moveUp(), moveDown()];
        choose = Math.floor(Math.random * moves.length);
        moves[choose];
    }

    moveRight() {
        if(this.x+1 < size){
            this.x +=1;
        } else{
            chooseMove();
        }
    }

    moveLeft() {
        if(this.x-1 > 0){
            this.x -=1;
        } else{
            chooseMove();
        }
    }

    moveUp() {
        if(this.y+1 < size){
            this.y +=1;
        } else{
            chooseMove();
        }
    }

    moveDown() {
        if(this.y-1 > 0){
            this.y -=1;
        } else{
            chooseMove();
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