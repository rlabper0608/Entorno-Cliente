const Vecinos = {
	ARRIBA: 0,
	ABAJO: 1,
	IZQUIERDA: 2,
	DERECHA: 3,
};

class Celda {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.valor = 0;
		this.vecinos = [null, null, null, null];
	}
	nuevoVecino(direccion, celda) {
		this.vecinos[direccion] = celda;
	}
}

export { Vecinos, Celda };
