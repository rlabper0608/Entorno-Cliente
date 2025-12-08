export const UI =  {
    btn: null,
    box: null,
    listBoxes:null,
    form: document.createElement("form"),
    expresionRegularText: new RegExp("[a-zA-Z]"),
    expresionRegularEmail: new RegExp("[a-z0-9]*@[a-z]*\.[com|es|org]*"),
    expresionRegularTlf: new RegExp("[0-9]"),
    expresionRegularDecimal: new RegExp("[0-9]*\.[0-9]*"),

    
    init: (config) => {
        UI.configurarForm(config.shift());
        UI.listBoxes = config;

        UI.listBoxes.forEach((item)=> {
            UI.crearCasilla(item);
        })
    },

    configurarForm: (config) => {
        UI.unir(document.getElementById(config.union), UI.form);
        UI.btn = document.getElementById(config.btn);
        UI.form.action = config.action;
        UI.form.method = config.method;
    },

    unir: (union, child) => {
        union.appendChild(child);
    },

    setEvent: () => {
        UI.btn.addEventListener("click", () => {
            UI.enviar();
        });
    },

    enviar: () => {
        console.log("Se ha enviado el formulario");
        validar();
        f.submit();
    },

    crearCasilla(casilla) {
        UI.box = document.createElement(casilla.tag);
        UI.box.type = casilla.type;
        UI.box.id = casilla.id;
        UI.box.class = casilla.class;
        UI.box.name = casilla.name;
        UI.box.min = casilla.min;
        UI.box.max = casilla.max;
        UI.box.required = casilla.required;
        UI.box.placeholder = casilla.placeholder;

        // if(casilla.type =="text") {
        //     box.pattern = "[a-zA-Z]";
        // } else if(casilla.type == "email") {
        //     box.pattern = "[a-z0-9]*@[a-z]*\.[com|es|org]*";
        // }else if (casilla.type ==  "decimal") {
        //     box.pattern = "[0-9]*\.[0-9]*";
        // }

        UI.unir(UI.form, box);
    },

    validar () {
        UI.box.content
    }
}