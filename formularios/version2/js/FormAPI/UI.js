export class UI {
	form = null;

	constructor(idForm) {
		this.form = document.getElementById(idForm);
	}

	createElementInput(name, type, placeholder, required) {
		const input = document.createElement("input");
		input.name = name;
		input.id = name;
		input.type = type;
		input.placeholder = placeholder;
		input.required = required;
		this.form.appendChild(input);
	}

	clearFormInput(name) {
		const input = this.form.querySelector(`input[name="${name}"]`);
		if (input) {
			input.value = "";
		}
	}
}
