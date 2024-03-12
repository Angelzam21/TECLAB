
function enviar() {

    const ingresoValue = document.querySelector('#ingreso').value;
    const habitacionesValue = document.querySelector('#habitaciones').value;
    const duracionValue = document.querySelector('#duracion').value;
    const nombreValue = document.querySelector('#nombre').value;
    const documentoValue = document.querySelector('#documento').value;
    const telefonoValue = document.querySelector('#telefono').value;
    const emailValue = document.querySelector('#email').value;

    if (!ingresoValue || !habitacionesValue || !duracionValue || !nombreValue || !documentoValue || !telefonoValue || !emailValue) {
        alert('Por favor, complete todos los campos para poder continuar.');
        return; // Detener la ejecución si falta un campo
    }

    const mensaje = `Hola, deseo hacer una reserva.%0A%0A` +
                    `Fecha de Ingreso: ${ingresoValue}%0A` +
                    `Tipo de Habitación: ${habitacionesValue}%0A` +
                    `Tiempo de uso: ${duracionValue}%0A` +
                    `Nombre: ${nombreValue}%0A` +
                    `Documento: ${documentoValue}%0A` +
                    `Teléfono: ${telefonoValue}%0A` +
                    `Correo Electrónico: ${emailValue}`;

    window.location.href = `https://api.whatsapp.com/send?phone=584120332888&text=${mensaje}`;
}