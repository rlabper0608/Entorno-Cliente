// Este ejemplo no tiene ninguna estructura y todo está separada en funciones
// sin ninguna lógica de control.

// Creo una lista vacía.
let list= [];

// Función para añadir un elemento a la lista.
function addElement(idElement) {
    list.push(idElement);
    console.log('Elemento añadido: ' + idElement);
}

// Función para iniciar el proceso de cambio de color de toda la lista
function nextElement() {
    if (list.length > 0) {
        const idElement = list.shift();
        console.log(idElement)
        changeOn(idElement);
    }
}

// Función para cambiar el color de fondo a azul claro después de 1 segundo. Luego pasa al siguiente.
function changeOff(idElement) {
    setTimeout(() => {
        document.getElementById(idElement).style.backgroundColor = 'lightblue';
        nextElement();
    }, 1000);
}

// Función para cambiar el color de fondo a rojo después de 1 segundo. Luego llama a changeOff. 
function changeOn(idElement) {
    setTimeout(() => {
        document.getElementById(idElement).style.backgroundColor = 'red';
        changeOff(idElement);
    }, 1000);
}

// Empezamos con la prueba, quiero que se ilumine 5 veces.
addElement('pulsador1');
addElement('pulsador1');
addElement('pulsador1');
addElement('pulsador1');
addElement('pulsador1');

// Empieza la secuencia de cambios de color.s
nextElement();


