import { UI } from "./UI.js"

UI.init({
    red: 'red',
    green: 'green',
    blue: 'blue',
    yellow: 'yellow'
});

// UI.usarTecla.start();


// const pulsarTecla = (conf) => {
//     conf.tecla.style.backgroundColor = conf.colorOn;
//     setTimeout(() => {
//         conf.tecla.style.backgroundColor = conf.colorOff;
//         setTimeout(()=> {
//             usarTecla.start();
//         },2000)
//     },2000)
// }

// const usarTecla = {
//     lista: [],
//     addTecla: (tecla, colorOn, colorOff) => {
//         usarTecla.lista.push({tecla:tecla, colorOn:colorOn, colorOff:colorOff});
//     },
//     start: () => {
//         let teclaPulsada = usarTecla.lista.pop();
//         console.log(teclaPulsada);
//         pulsarTecla(teclaPulsada);
//     }
// }

// usarTecla.addTecla(document.getElementById("red"), "red", "blue");
// usarTecla.addTecla(document.getElementById("red"), "yellow", "green");

// usarTecla.start();


// Mi forma (con opacidad)

const colores = ["red", "blue", "yellow", "green"];

const secuencia = [];

const rojo = document.getElementById(colores[0]);
const azul = document.getElementById(colores[1]);
const amarillo = document.getElementById(colores[2]);
const verde = document.getElementById(colores[3]);

const setEvent = () => {

    rojo.addEventListener('click', (event) => {
        console.log("rojo")
    });

    azul.addEventListener('click', (event) => {
        console.log("azul")
    });

    amarillo.addEventListener('click', (event) => {
        console.log("amarillo")
    });

    verde.addEventListener('click', (event) => {
        console.log("verde")
    });
}

// Ponemos para que los colores se puedan pulsar
const pulsarTecla = (conf) => {
    conf.tecla.style.opacity = 1;
    setTimeout(() => {
        conf.tecla.style.opacity = 0.5;
        setTimeout(()=> {
            usarTecla.start();
        },2000)
    },2000)
}

const usarTecla = {
    lista: [],
    addTecla: (tecla) => {
        usarTecla.lista.push({tecla:tecla});
        secuencia.push({tecla:tecla});
    },
    start: () => {
        let teclaPulsada = usarTecla.lista.shift();
        if(teclaPulsada != undefined) pulsarTecla(teclaPulsada);
    }
}

// Creamos una función para que nos devuelva un numero aletarorio, y que esto nos devuelva uno de los 4 colores, para que se enciendan y apaguen de manera random 
const aleatorio = () => {    
    let numeroRandom = Math.floor(Math.random() * colores.length);
    console.log(numeroRandom)

    let colorSeleccionado = colores[numeroRandom];

    usarTecla.addTecla(document.getElementById(colorSeleccionado));
}

aleatorio();
aleatorio();
aleatorio();
aleatorio();

usarTecla.start();
setEvent();