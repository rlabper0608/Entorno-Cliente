import { UI } from "./ui.js";

UI.init({
    status: document.getElementById("status"),
    size: document.getElementsByClassName("sizes"),
    table: document.getElementById("table"),
    cell: document.getElementById("cell"),
});

UI.setStatus("Hola")
UI.duplicate()