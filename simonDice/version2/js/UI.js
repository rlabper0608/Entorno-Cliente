// Uso de la API para el reconocimiento de voz

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechRecognitionEvent =
	SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

export const UI = {
	game: null,
	busy: false,
	status: {
		ON: 1,
		OFF: 0,
	},
	listButtons: [],
	playButton: null,
	message: null,
	btnHablar: null,
	colorHablado: null,
	recognition: null,

	// Realizo tres pops para sacar los últimos objetos, que los necesito para los botones.
	init: (configButtons) => {
		UI.listButtons = configButtons;
		UI.btnHablar = document.getElementById(UI.listButtons.pop().id);
		UI.message = document.getElementById(UI.listButtons.pop().id);
		UI.playButton = document.getElementById(UI.listButtons.pop().id);
		UI.listButtons.forEach((item) => {
			item.color = document.getElementById(item.color);
		});

		// Configuracion API reconocimiento de voz
		UI.recognition = new SpeechRecognition();

		UI.recognition.continuous = false;
		UI.recognition.lang = "en-US";
		UI.recognition.interimResults = false;
		UI.recognition.maxAlternatives = 1;

		UI.recognition.onspeechend = () => {
			UI.recognition.stop();
		};

		UI.recognition.onresult = (event) => {
			UI.colorHablado = event.results[0][0].transcript;
			console.log("Color dicho: " + UI.colorHablado);
			UI.transformarColor(UI.colorHablado);
		};
	},

	// Recibimos el juego
	start(game) {
		UI.game = game;
	},

	// Función para cambiar el color de los botones del juego
	change(element, status) {
		return new Promise((resolve) => {
			setTimeout(() => {
				element.color.style.backgroundColor =
					status === UI.status.ON
						? element.colorOn
						: element.colorOff;
				resolve(true);
			}, 2000);
		});
	},

	// Función donde le damos el evento a los botones
	setEvent() {
		if (!UI.busy) {
			UI.game.listButtons.forEach((item, index) => {
				item.color.addEventListener("click", () => {
					if (!UI.busy) {
						UI.game.secuenciaUsuario.push(index);
						console.log(UI.game.secuenciaUsuario);

						UI.game.comprobar(UI.game.secuenciaUsuario, UI.game.list);
					}
				});
			});
		}

		UI.btnHablar.addEventListener("click", () => {
			UI.recognition.start();
			console.log("Listo para hablar");
		});
	},

	// Función para pasar la palabra reconocida a un número, para así meterlo en la secuencia realizada por el usuario
	transformarColor(color) {
		if (!UI.busy) {
			if (color == "red") {
				UI.game.secuenciaUsuario.push(0);
			} else if (color == "blue") {
				UI.game.secuenciaUsuario.push(1);
			} else if (color == "yellow") {
				UI.game.secuenciaUsuario.push(2);
			} else if (color == "green") {
				UI.game.secuenciaUsuario.push(3);
			}
			console.log(UI.game.secuenciaUsuario);
			UI.game.comprobar(UI.game.secuenciaUsuario, UI.game.list);
		}
	}
};
