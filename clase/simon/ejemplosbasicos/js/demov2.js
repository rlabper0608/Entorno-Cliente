// Agrupamos en un objeto todas las funciones y la lista para tener mejor control de todo el proceso.   
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
            document.getElementById(idElement).style.backgroundColor = 'lightblue';
            control.nextElement();
        }, 1000);
    },
    
    changeOn(idElement) {
        setTimeout(() => {
            document.getElementById(idElement).style.backgroundColor = 'red';
            control.changeOff(idElement);
        }, 1000);
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

// Ahora el código está mejor estructurado y es más fácil de entender y mantener.
// El problema es que la lógica y la interfaz siguen mezcladas.
