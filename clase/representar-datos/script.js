const consulta = () => {
	fetch("https://jsonplaceholder.typicode.com/todos")
		.then((response) => response.json())
		.then((data) => {

            for (let datos of data) {
                console.log(datos);
                clonarFilas(datos);
            }
		});
};

consulta();

const clonarCelda = (dato) => {
	const padre = document.getElementById("fila");
    const plantilla = document.getElementById("celda")
    plantilla.innerText = dato;
};

// clonarCelda();

const clonarFilas = (datos) => {
	const padre = document.getElementById("tabla");
	const plantilla = document.getElementById("fila");
	let clone = plantilla.cloneNode(true);
    for (let key in datos) {
        clonarCelda(datos[key]);
        // console.log(datos[key]);
    }
	padre.appendChild(clone);
};

// clonarFilas();