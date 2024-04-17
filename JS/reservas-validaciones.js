const nombreField = document.getElementById('nombre');
const documentoField = document.getElementById('documento');
const telefonoField = document.getElementById('telefono');
const emailField = document.getElementById('email');
let trigger = 0;

const validateEmptyField = (message,e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length===0) {
        field.classList.add("invalid"); 
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = message ;
    } else {
        field.classList.remove("invalid"); 
        field.nextElementSibling.classList.remove("error");
        if (trigger == 0) {
            field.nextElementSibling.innerText = ""; 
        }
    }
}

nombreField.addEventListener('blur', (e) => validateEmptyField("Por favor ingrese su nombre", e));
documentoField.addEventListener('blur', (e) => validateEmptyField("Por favor ingrese su número de documento", e));
telefonoField.addEventListener('blur', (e) => validateEmptyField("Por favor ingrese su número de teléfono", e));
emailField.addEventListener('blur', (e) => validateEmptyField("Por favor ingrese su dirección de correo electrónico", e));

const validateNombreFormat = (e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^[A-Za-z.]+(?: [A-Za-z.]+)*$/);
    if (fieldValue.trim().length>0 && !regex.test(fieldValue)) {
        field.classList.add("invalid-format"); 
        field.nextElementSibling.classList.add("error-format");
        field.nextElementSibling.innerText = "Ingrese un nombre valido" ;
        trigger = 1;
    } else {
        field.classList.remove("invalid-format"); 
        field.nextElementSibling.classList.remove("error-format");
        field.nextElementSibling.innerText = "";
        trigger = 0;
    }
}
const validateEmailFormat = (e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    if (fieldValue.trim().length>5 && !regex.test(fieldValue)) {
        field.classList.add("invalid-format"); 
        field.nextElementSibling.classList.add("error-format");
        field.nextElementSibling.innerText = "Ingrese una dirección de correo electrónico valida" ;
        trigger = 1;
    } else {
        field.classList.remove("invalid-format"); 
        field.nextElementSibling.classList.remove("error-format");
        field.nextElementSibling.innerText = "";
        trigger = 0;
    }
}
const validateDocumentoFormat = (e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^[a-zA-Z0-9-]*$/);
    if (fieldValue.trim().length>0 && !regex.test(fieldValue)) {
        field.classList.add("invalid-format"); 
        field.nextElementSibling.classList.add("error-format");
        field.nextElementSibling.innerText = "Ingrese un número de documento valido" ;
        trigger = 1;
    } else {
        field.classList.remove("invalid-format"); 
        field.nextElementSibling.classList.remove("error-format");
        field.nextElementSibling.innerText = "";
        trigger = 0;
    }
}
const validateTelefonoFormat = (e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^\+?[0-9 ()]+$/);
    if (fieldValue.trim().length>0 && !regex.test(fieldValue)) {
        field.classList.add("invalid-format"); 
        field.nextElementSibling.classList.add("error-format");
        field.nextElementSibling.innerText = "Ingrese un número de telefono valido" ;
        trigger = 1;
    } else {
        field.classList.remove("invalid-format"); 
        field.nextElementSibling.classList.remove("error-format");
        field.nextElementSibling.innerText = "";
        trigger = 0;
    }
}

nombreField.addEventListener('input', validateNombreFormat);
emailField.addEventListener('input', validateEmailFormat);
documentoField.addEventListener('input', validateDocumentoFormat);
telefonoField.addEventListener('input', validateTelefonoFormat);



