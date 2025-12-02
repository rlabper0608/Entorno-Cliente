export const UI = {
	game: null,
	busy: false,
	status: {
		ON: 1,
		OFF: 0,
	},
	listButtons: [],
    playButton: null,

	init: (configButtons) => {
        UI.listButtons = configButtons;
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
