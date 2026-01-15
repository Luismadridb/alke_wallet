$('#btnDepositar').click(function () {

  let monto = $('#montoDeposito').val();

  $('#contenedorAlerta').html('');

  if (monto == '') {

    alert('Debe ingresar un monto');

  } else if (monto <= 0) {
    
    alert('El monto debe ser mayor a cero');
  } else {

    $('#contenedorAlerta').html(
      '<div class="alert alert-success">' +
      'Depósito realizado por $' + monto +
      '</div>'
    );

    setTimeout(function () {
      window.location.href = 'menu.html';
    }, 2000);

  }

});
