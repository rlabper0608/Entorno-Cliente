// const consulta = () => {
// 	fetch("https://jsonplaceholder.typicode.com/todos")
// 		.then((response) => response.json())
// 		.then((data) => {
// 			for (let datos of data) {
// 				console.log(datos);
// 				clonarFilas(datos);
// 			}
// 		});
// };

// consulta();

const consulta2 = () => {
	fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
		response.json().then((data) => {
			console.log(data);
			for (let datos of data) {
				clonarFilas(datos);
			}
		});
	});
};
consulta2();

const clonarFilas = (datos) => {
	const tabla = document.getElementById("tabla");
	const plantilla = document.querySelector("#template");
	console.log(datos)
	const clone = plantilla.content.querySelector(".fila").cloneNode(true);

	[...clone.children].forEach((item, index) => {
		item.innerHTML = Object.values(datos[index]);
	});

	tabla.appendChild(clone);
};
