$(document).ready(function() {
    // Función para mostrar la alerta
    $.fn.alertaPlugin = function() {
        var alerta = $(this);
        alerta.fadeIn(); // Muestra el cuadro de alerta
        alerta.find('.cerrar-alerta').on('click', function() {
            alerta.fadeOut(); // Cierra el cuadro de alerta
        });
    };

    // Activar el plugin cuando se haga clic en el botón
    $('#mostrar-alerta').on('click', function() {
        $('#alerta').alertaPlugin(); // Llama al plugin para mostrar la alerta
    });
});
