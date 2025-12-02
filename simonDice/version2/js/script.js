import { UI } from "./UI.js";
import { game } from "./game.js";

UI.init([
	{
		color: "red",
		colorOn: "#FF0000",
		colorOff: "#f76565ff",
	},
	{
		color: "blue",
		colorOn: "#1100ffff",
		colorOff: "#776ef3ff",
	},
	{
		color: "yellow",
		colorOn: "#fbff00ff",
		colorOff: "#f8fa86ff",
	},
	{
		color: "green",
		colorOn: "#00ff00ff",
		colorOff: "#77f577ff",
	},
]);

const gameInstance = new game(UI);

// UI.setList([0, 1, 1, 2, 0, 3]);

document.getElementById("btn").addEventListener("click", () => {
    gameInstance.play();
    document.getElementById("btn").hidden = true;
});
