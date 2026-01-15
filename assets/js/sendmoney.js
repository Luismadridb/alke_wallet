$('#btnNuevoContacto').click(function () {
    $('#formNuevoContacto').show();
});

$('#btnCancelar').click(function () {
    $('#formNuevoContacto').hide();
});

$('#btnGuardarContacto').click(function () {

    let nombre = $('#nombre').val();
    let cbu = $('#numero de cuenta').val();
    let alias = $('#alias').val();
    let banco = $('#banco').val();

    if (nombre == '' || cbu == '' || alias == '' || banco == '') {
        alert('Debe completar todos los campos');
    } else {
        alert('Contacto agregado correctamente');
        $('#formNuevoContacto').hide();
    }

});

$('#contacto1').click(function () {
    $('#btnEnviar').show();
});

$('#busqueda').keyup(function () {
    let texto = $('#busqueda').val();

    if (texto == '') {
        $('#contacto').show();
    } else if (texto == 'juan' || texto == 'juan.perez') {
        $('#contacto').show();
    } else {
        $('#contacto').hide();
    }
});
$('#btnEnviar').click(function () {
    $('#mensajeConfirmacion').html(
        '<div class="alert alert-success">' +
        'Dinero enviado correctamente' +
        '</div>'
    );
});
