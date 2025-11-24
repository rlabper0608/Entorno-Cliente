export const UI = {
	game: null,
	busy: false,
	status: {
		ON: 1,
		OFF: 0,
	},
	listButtons: [],

	init: (configButtons) => {
        UI.listButtons = configButtons;
        UI.listButtons.forEach((item) => {
            item.color = document.getElementById(item.color);
        });
    },

    start(game) {
        UI.game = game;
    },

    // setEvent: () =>  {
    //     document.getElementById("btn").addEventListener("click", );
    // },

    setList: (list) => {
        UI.game.list = list;
    }
};
