import { FormAPIBuilder } from "./formApi/FormAPIBuilder.js";

const FormApi = FormAPIBuilder.getFormAPI("formulario");

FormApi.addInput("name", "text", "Añade tu nombre", true);
FormApi.addInput("age", "number", "Añade tu edad", true);


console.log(FormApi.getRegularExpression("name"));

console.log("Age")
FormApi.find_out("9", "age");
FormApi.find_out("hola", "age");

console.log("nombre")
FormApi.find_out("hola", "name");
FormApi.find_out("ho2312", "name");


FormApi.addRegularExpression({
    textarea: "[A-Za-z0-9]",
});
