import { UI } from "./UI.js";
import { game } from "./game.js";
// import { animate } from "./node_modules/animejs/dist/bundles/anime.esm.js";
import {
	animate,
	splitText,
	stagger,
} from "./node_modules/animejs/dist/bundles/anime.esm.js";
UI.init([
	{
		color: "red",
		colorOn: "#fd2323ff",
		colorOff: "rgb(177, 7, 7)",
	},
	{
		color: "blue",
		colorOn: "#33b9f7ff",
		colorOff: "rgb(16, 7, 143)",
	},
	{
		color: "yellow",
		colorOn: "#f8fc30ff",
		colorOff: "rgb(247, 193, 46)",
	},
	{
		color: "green",
		colorOn: "#32ff32ff",
		colorOff: "rgb(4, 121, 4)",
	},
	{
		id: "btn",
	},
	{
		id: "message",
	},
	{
		id: "hablar"
	}
]);

const gameInstance = new game(UI);

document.getElementById("btn").addEventListener("click", () => {
	gameInstance.play();
	document.getElementById("btn").hidden = true;
});
