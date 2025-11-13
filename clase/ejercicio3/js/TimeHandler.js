class TimeHandler {
	static indice = null;
	static contador = null;
	static status = false;

	static timeAdder(UI, numberElement, time) {
		TimeHandler.contador = numberElement;

		if (TimeHandler.status === false) {
			TimeHandler.indice = setInterval(() => {
				UI.add();
				TimeHandler.contador--;
				console.log(this.contador);
				if (TimeHandler.contador === 7) TimeHandler.stop();
			}, time);
            TimeHandler.status = true;
		}else {
            console.log("Ya hay un programa ejecutandose")
        }
	}

	static stop() {
		clearInterval(TimeHandler.indice);
        TimeHandler.status = false;
	}

	static status() {
		return TimeHandler.status;
	}
}

export { TimeHandler };
