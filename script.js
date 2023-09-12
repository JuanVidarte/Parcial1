function mostrarContenido(seccion) {
    // Ocultar todas las secciones
    document.querySelectorAll(".seccion").forEach(function(seccionElement) {
        seccionElement.style.display = "none";
    });

    // Mostrar la sección seleccionada
    document.getElementById(seccion).style.display = "block";
}

function validarFormulario() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var estrato = document.getElementById("estrato").value;
    var fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    var grupoSanguineo = document.getElementById("grupo-sanguineo").value;
    var genero = document.querySelector('input[name="genero"]:checked');
    var actividades = document.querySelectorAll('input[name="actividades"]:checked');

    var regexNombres = /^[A-Za-záéíóúñÑÁÉÍÓÚ\s]+$/;
    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var regexTelefono = /^[0-9]+$/;
    var regexFechaNacimiento = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

    if (!regexNombres.test(nombres)) {
        alert("Por favor, ingrese un nombre válido.");
        return false;
    }

    if (!regexNombres.test(apellidos)) {
        alert("Por favor, ingrese apellidos válidos.");
        return false;
    }

    if (!regexEmail.test(email)) {
        alert("Por favor, ingrese una dirección de correo electrónico válida.");
        return false;
    }

    if (!regexTelefono.test(telefono)) {
        alert("Por favor, ingrese un número de teléfono válido.");
        return false;
    }

    if (estrato === "0") {
        alert("Por favor, seleccione un estrato válido.");
        return false;
    }

    if (!regexFechaNacimiento.test(fechaNacimiento)) {
        alert("Por favor, ingrese una fecha de nacimiento válida.");
        return false;
    }

    if (grupoSanguineo === "0") {
        alert("Por favor, seleccione un grupo sanguíneo válido.");
        return false;
    }

    if (!genero) {
        alert("Por favor, seleccione un género.");
        return false;
    }

    if (actividades.length === 0) {
        alert("Por favor, seleccione al menos una actividad favorita.");
        return false;
    }

    return true;
}