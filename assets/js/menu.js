$('#btnDepositar').click(function () {
  alert('Redirigiendo a Depósito');
  window.location.href = 'deposit.html';
});

$('#btnEnviar').click(function () {
  alert('Redirigiendo a Enviar Dinero');
  window.location.href = 'sendmoney.html';
});

$('#btnMovimientos').click(function () {
  alert('Redirigiendo a Últimos Movimientos');
  window.location.href = 'transactions.html';
});
