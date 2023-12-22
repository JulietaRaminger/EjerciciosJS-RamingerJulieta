//CALCULAR NOTA FINAL DE ALUMNOS INGRESADOS.


function calcularNotaFinal(nombre, promedio, asistencia) {
    var criterioPromedio = 70; // Promedio necesario para aprobar
    var criterioAsistencia = 80; // Porcentaje de asistencia necesario para aprobar

    if (promedio >= criterioPromedio && asistencia >= criterioAsistencia) {
        return nombre + " está Aprobado";
    } else {
        return nombre + " está Reprobado";
    }
}

function calcularNotasFinales() {
    var continuarAgregando = true;

    while (continuarAgregando) {
        var nombre = prompt("Ingrese el nombre del alumno:");
        var promedio = parseFloat(prompt("Ingrese el promedio del alumno:"));
        var asistencia = parseFloat(prompt("Ingrese el porcentaje de asistencia del alumno:"));

        if (!isNaN(promedio) && !isNaN(asistencia)) {
            var notaFinal = calcularNotaFinal(nombre, promedio, asistencia);
            console.log(notaFinal);

            var respuesta = prompt("¿Desea agregar otro alumno? (Si/No)").toLowerCase();
            continuarAgregando = respuesta === 'si';
        } else {
            alert("Por favor, ingrese promedio y asistencia válidos.");
        }
    }
}

calcularNotasFinales();