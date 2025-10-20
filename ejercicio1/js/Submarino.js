class Submarino {
    constructor() {
        this.x = 0;
        this.y = 0;
        document.getElementById("bloque").innerHTML = "El submarino se ha creado";
    }

    init(size) {
        // this.size = size;
        this.x = 10;
        this.y = 10;
    }
}

export {Submarino}