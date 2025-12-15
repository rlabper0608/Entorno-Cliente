export class FormAPI {
	controlForm = [];
	ui = null;

    regularExpressions = {
        name: new RegExp("[a-zA-Z]"),
        phone: new RegExp("[0-9]"),
        email: new RegExp("[a-z0-9]*@[a-z]*\.[com|es|org]*"), 
        decimal: new RegExp("[0-9]*\.[0-9]*"),
		age: new RegExp("[0-9]"),
    };

	constructor(ui) {
		this.ui = ui;
	}

	addInput(name, type, placeholder, required) {
		// let regularExpression = this.regularExpressions[name];
		this.controlForm.push({
			name: name,
			type: type,
			placeholder: placeholder,
			requiree: required,
			// regularExpression: regularExpression,
		});
		console.log(this.controlForm);
		this.ui.createElementInput(name, type, placeholder, required);
	}

	find_out(value, type) {
		// Llamamos a la función cuando se envie el formulario y vamos a comprobar que el contenido que estamos escribiendo concuerda con la expresion regular que le tenemos puesta, si no concuerda llamamos a la función de error, para que aparezca el mensaje de error debajo del input que hemos rellenado.

		// He visto en mozilla que .test devuelve T o F dependiendo si valor que está en su paramatetro concuerda con la expresión regular
		console.log(this.regularExpressions[type]);
		const error = this.regularExpressions[type].test(value);

		if(!error) {
			this.getError(value, "Error en la expresión regular")
		}

	}

	clearFormInput(name) {
		this.ui.clearFormInput(name);
	}

	buildForm() {
		// this.controlForm.forEach(inputData => {}
	}

    getRegularExpression(type) {
        return this.regularExpressions[type];
    }

    addRegularExpression(config) {
        for(let item in config) {
			// console.log(config[item]);
			this.regularExpressions[item] = new RegExp(config[item]);
		}
		console.log(this.regularExpressions)
    }

    getError(input, message) {
		console.log(message);
    }
}
