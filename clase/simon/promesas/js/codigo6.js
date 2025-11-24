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

    try {
        await promesa().then((valor) => {
            console.log("Acabo de terminar con valor");
            console.log(valor);
        }, (valor) => {
            console.log("Esto se ejecuta cuando hay error.");
            console.log(valor);
            throw new Error("Esto es un error");

        }).finally(() => {
            console.log("ESTO SE EJECUTA PASE LO QUE PASE.");
        });
    } catch (e) {
        console.log("ERROR EN LA PROMESA.");
        console.log(e);
    }
    console.log("Termino la llamada");
}

espera();
