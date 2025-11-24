// Para entender el siguiente ejemplo vamos a trabajar con objetos.

const persona = {
    nombre: 'Juan',
    edad: 30
}

console.log('Nombre: ' + persona.nombre);
console.log('Edad: ' + persona.edad);

persona.nombre = 'María';
persona.edad = 25;

console.log('Nombre modificado: ' + persona.nombre);
console.log('Edad modificada: ' + persona.edad);

// Ahora vamos a crear un elemento más completo que incluya métodos para manipular sus propiedades.

const persona1 = {
    nombre: 'Ana',
    edad: 28,
    cambiarNombre: (nombre) => {
        persona1.nombre = nombre;
    },
    dimeTuNombre: () => {
        console.log('Mi nombre es ' + persona1.nombre);
    }
}

persona1.dimeTuNombre();
persona1.cambiarNombre('Luis');
persona1.dimeTuNombre();

// Una vez entendido esto, estructuramos el código de demov0.js
