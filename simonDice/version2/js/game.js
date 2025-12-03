// import { animate } from "./node_modules/animejs/dist/bundles/anime.esm.js";
import {
	animate,
	splitText,
	stagger,
} from "./node_modules/animejs/dist/bundles/anime.esm.js";

// Uso de la API para el reconocimiento de voz

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechRecognitionEvent =
	SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var colors = ["blue", "green", "red", "yellow"];

// let recognition = new SpeechRecognition();

// recognition.continuous = false;
// recognition.lang = "en-US";
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// recognition.onspeechend = function () {
// 	recognition.stop();
// };

// recognition.onnomatch = function (event) {
// 	diagnostic.textContent = "I didn't recognise that color.";
// };

// recognition.onerror = function (event) {
// 	diagnostic.textContent = "Error occurred in recognition: " + event.error;
// };

// recognition.onresult = function (event) {
// 	const color = event.results[0][0].transcript;

// 	if (color == "red") {
// 		this.secuenciaUsuario.push(0);
// 	} else if (color == "blue") {
// 		this.secuenciaUsuario.push(1);
// 	} else if (color == "yellow") {
// 		this.secuenciaUsuario.push(2);
// 	} else if (color == "green") {
// 		this.secuenciaUsuario.push(3);
// 	}

// 	diagnostic.textContent = "Result received: " + color + ".";
// 	bg.style.backgroundColor = color;
// 	console.log("Confidence: " + event.results[0][0].confidence);
// };

export class game {
	listButtons = [];
	list = [];
	secuenciaUsuario = [];
	recognition = null;
	colorHablado = null;

	constructor(UIControl) {
		this.UIControl = UIControl;
		this.UIControl.start(this);
		this.listButtons = this.UIControl.listButtons;
		this.setEvent();
		this.secuenciaUsuario = [];

		this.recognition = new SpeechRecognition();

		this.recognition.continuous = false;
		this.recognition.lang = "en-US";
		this.recognition.interimResults = false;
		this.recognition.maxAlternatives = 1;

		this.recognition.onspeechend = () => {
			this.recognition.stop();
		};

		this.recognition.onresult = (event) => {
			this.colorHablado = event.results[0][0].transcript;
			console.log("Color dicho: " + this.colorHablado);
			this.transformarColor(this.colorHablado);
		};
		
	}

	transformarColor(color) {
		if (color == "red") {
			this.secuenciaUsuario.push(0);
		} else if (color == "blue") {
			this.secuenciaUsuario.push(1);
		} else if (color == "yellow") {
			this.secuenciaUsuario.push(2);
		} else if (color == "green") {
			this.secuenciaUsuario.push(3);
		}
		console.log(this.secuenciaUsuario);
		this.comprobar(this.secuenciaUsuario, this.list);
	}

	aleatorio() {
		console.log("aleatorio");
		let numeroRandom = Math.floor(Math.random() * this.listButtons.length);

		this.list.push(numeroRandom);
	}

	change(element, status) {
		return new Promise((resolve) => {
			setTimeout(() => {
				element.color.style.backgroundColor =
					status === this.UIControl.status.ON
						? element.colorOn
						: element.colorOff;
				resolve(true);
			}, 2000);
		});
	}

	async play() {
		console.log("play");
		this.aleatorio();
		this.UIControl.busy = true;

		for (let item of this.list) {
			await this.change(this.listButtons[item], this.UIControl.status.ON);
			await this.change(this.listButtons[item], this.UIControl.status.OFF);
		}
		this.UIControl.message.hidden = true;
		this.UIControl.busy = false;
		console.log("termine");
	}

	comprobar(secuencia, lista) {
		for (let i = 0; i < secuencia.length; i++) {
			if (secuencia[i] !== lista[i]) {
				console.log("fallaste");
				this.reiniciar();
				return false;
			}
		}

		if (lista.length === secuencia.length) {
			console.log("Secuencia Correcta");
			this.secuenciaUsuario = [];
			this.play();
			this.UIControl.message.hidden = false;
			this.UIControl.message.innerHTML = "Acertaste!";
		} else {
			console.log("Vas bien");
		}
	}

	setEvent() {
		if (!this.UIControl.busy) {
			this.listButtons.forEach((item, index) => {
				// console.log(item);
				// console.log(index);
				item.color.addEventListener("click", () => {
					this.secuenciaUsuario.push(index);
					console.log(this.secuenciaUsuario);

					this.comprobar(this.secuenciaUsuario, this.list);
				});
			});
		}

		this.UIControl.btnHablar.addEventListener("click", () => {
			this.recognition.start();
			console.log("Listo para hablar");
		});
	}

	reiniciar() {
		console.log("reiniciar");
		this.list = [];
		this.secuenciaUsuario = [];
		this.UIControl.busy = false;
		this.UIControl.playButton.hidden = false;
		this.UIControl.message.innerHTML = "Fallaste!";

		// const { chars } = splitText("this.UIControl.message", {
		// 	chars: { wrap: "clip" },
		// });

		// animate(chars, {
		// 	y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 750, ease: "in(3)" }],
		// 	duration: 750,
		// 	ease: "out(3)",
		// 	delay: stagger(50),
		// 	loop: true,
		// });

		// this.UIControl.message.innerHTML = chars.text;
	}
}
