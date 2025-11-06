import { UI } from "./ui.js";

UI.init({
    status: document.getElementById("status"),
    // size: document.getElementsByClassName("sizes"),
    size:20,
    table: document.getElementById("tabla"),
    casilla: document.getElementById("casilla-template"),
});

// UI.creaGridTemplate(20, document.getElementById("casilla-template"), document.getElementById("tabla"));

