$('#filtroTipo').change(function () {

  let filtro = $('#filtroTipo').val();

  if (filtro == 'todos') {
    $('.movimiento').show();
  } else if (filtro == 'deposito') {
    $('.deposito').show();
    $('.envio').hide();
  } else if (filtro == 'envio') {
    $('.envio').show();
    $('.deposito').hide();
  }

});
