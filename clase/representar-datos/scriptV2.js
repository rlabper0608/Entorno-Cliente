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

const modificarCelda = (dato) => {
	const fila = document.getElementById("fila");
    const celda = document.getElementById("celda")
    celda.innerHTML = dato;
    fila.appendChild(celda);
};


const clonarFilas = (datos) => {
    const template = document.getElementById("template");
	const tabla = document.getElementById("tabla");
    const clonated_template = template.content.cloneNode(true);

	const fila = clonated_template.querySelector(".fila");
    for (let key in datos) {
        modificarCelda(datos[key]);
    }
	tabla.appendChild(fila);
};
