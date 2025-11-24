import { UI } from './UIv2.js';

// Como hemos hecho en clase creamos un objeto de configuración con el comportamiento de la interfaz.
UI.init(
    [
        {
            id: "pulsador1",
            colorOn: "#444444",
            colorOff: "lightblue"
        },
        {
            id: "pulsador2",
            colorOn: "#444444",
            colorOff: "lightblue"
        },
        {
            id: "pulsador3",
            colorOn: "#444444",
            colorOff: "lightblue"     
        },
        {
            id: "pulsador4",
            colorOn: "#444444",
            colorOff: "lightblue"     
        }
    ]
);

// La lógica del juego tendría que contactar con la interfaz y enviarle la secuencia a mostrar.
UI.setList([0,1,1,3,2,1,0,0]);
UI.play();

// En cualquier momento la lógica del juego podría saber si la interfaz está ocupada mostrando la secuencia.
console.log(UI.isBusy());



