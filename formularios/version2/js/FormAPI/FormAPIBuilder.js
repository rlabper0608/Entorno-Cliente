import {  FormAPI } from "./FormAPI.js";
import { UI } from "./UI.js";

export class FormAPIBuilder {

    static getFormAPI(idForm, ui = null) {
        if ( ui === null ) {
            ui = new UI(idForm);
        }
        return new FormAPI(ui);
    }
}