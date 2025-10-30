import { UI } from "./ui.js";

UI.init({
    status: document.getElementById("status"),
    size: document.getElementsByClassName("sizes"),
    talbe: document.getElementsByClassName("table"),
});

UI.setStatus("Hola")