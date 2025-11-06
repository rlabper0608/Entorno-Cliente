import { UI } from "./ui.js";

UI.init({
    status: document.getElementById("status"),
    size: document.getElementsByClassName("sizes"),
    table: document.getElementById("tabla"),
    casilla: document.getElementById("casilla-template"),
});

UI.creaGridTemplate(20, document.getElementById("casilla-template"), document.getElementById("tabla"));

