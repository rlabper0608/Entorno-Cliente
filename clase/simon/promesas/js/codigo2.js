function promesa() {
    let objeto = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Termino mi espera");
            resolve(99)
        }, 5000);
    });   
    return objeto;
}

async function espera() {
    console.log("Preparo la llamada");
    let salida = await promesa().then((valor)=> {
        console.log("Acabo de terminar con valor");
        console.log(valor); 
        return 12;
    });
    console.log("Salida con " + salida);
    console.log("Termino la llamada");
}

espera();