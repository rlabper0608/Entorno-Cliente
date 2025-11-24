function promesa() {
    let objeto = new Promise((resolve, reject) => {
        let error = Math.floor(Math.random() * 2);
        setTimeout(() => {
            console.log("Termino mi espera");
            if (error === 0) reject(34)
            resolve(99);
        }, 5000);
    });
    return objeto;
}

async function espera() {
    console.log("Preparo la llamada");
    promesa().then((valor)=> {
        console.log("Acabo de terminar con valor");
        console.log(valor); 
        actualizo(`Termino con valor ${valor}`);
    });
    console.log("Termino la llamada");
}

function actualizo(msg) {
    document.getElementById("status").innerHTML = msg;
}

espera();