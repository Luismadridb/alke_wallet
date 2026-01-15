$('#btnLogin').click(function () {

  let email = $('#email').val();
  let password = $('#password').val();

  if (email == '' || password == '') {
    alert('Debe completar todos los campos');
  } else if (email == 'admin@wallet.com' && password == '1234') {
    alert('Login correcto');
    window.location.href = 'menu.html';
  } else {
    alert('Credenciales incorrectas');
  }

});
