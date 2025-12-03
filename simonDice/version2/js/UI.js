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
	recognition: new SpeechRecognition(),

	init: (configButtons) => {
		UI.listButtons = configButtons;
		UI.btnHablar = document.getElementById(UI.listButtons.pop().id);
		UI.message = document.getElementById(UI.listButtons.pop().id);
		UI.playButton = document.getElementById(UI.listButtons.pop().id);
		UI.listButtons.forEach((item) => {
			item.color = document.getElementById(item.color);
		});
	},

	start(game) {
		UI.game = game;
	},

	setList: (list) => {
		UI.game.list = list;
	},
};
