// Separamos la lógica de control de la interfaz.
// Creamos un objeto para manejar la lógica de control.
const control = {
    list: [],
    
    addElement(idElement) {
        control.list.push(idElement);
    },

    nextElement() {
        if (control.list.length > 0) {
            const idElement = control.list.shift();
            control.changeOn(idElement);
        }
    },

    changeOff(idElement) {
        setTimeout(() => {
            ui.setElementColor(idElement, 'lightblue');
            control.nextElement();
        }, 1000);
    },
    
    changeOn(idElement) {
        setTimeout(() => {
            ui.setElementColor(idElement, 'red');
            control.changeOff(idElement);
        }, 1000);
    }
}

// Creamos un objeto para manejar la interfaz.
const ui = {
    setElementColor(idElement, color) {
        document.getElementById(idElement).style.backgroundColor = color;
    }
}

// Lo usamos.
// Empezamos con la prueba, quiero que se ilumine 5 veces.
control.addElement('pulsador1');
control.addElement('pulsador1');
control.addElement('pulsador1');
control.addElement('pulsador1');
control.addElement('pulsador1');

// Empieza la secuencia de cambios de color.
control.nextElement();

// Ahora el código está bien estructurado, es fácil de entender y mantener.
// La lógica de control y la interfaz están separadas.

