/*Haciendo uso de expresiones regulares crea funciones para validar los campos que se indican a continuación. 
La función recibirá un parámetro de tipo string con el valor a validar y debe devolver true o false según cumpla los requisitos de validación:

validarMayuscula: El parámetro debe contener al menos un carácter en mayúscula
validarCaracteresEspeciales: El parámetro debe contener al menos uno de los siguientes caracteres: !@#$%^&
validarCorreo: El parámetro debe tener el formato correcto de un email
validarTarjetaCredito: El parámetro debe tener el formato correcto de una tarjeta de crédito
validarLongitud: El parámetro debe tener al menos 8 caracteres.
validarNumero: El parámetro debe contener al menos un dígito.*/


window.onload=()=> {
    console.log(validarMayuscula("abcD")); // true
    console.log(validarCaracteresEspeciales("123@abc")); // true
    console.log(validarCorreo("correo@example.com")); // true
    console.log(validarTarjetaCredito("1234567890123456")); // true
    console.log(validarLongitud("12345678")); // true
    console.log(validarNumero("abc123")); // true
    }

function validarMayuscula(valor) {
    return /[A-Z]/.test(valor);
  }
  
  function validarCaracteresEspeciales(valor) {
    return /[!@#\$%^&]/.test(valor);
  }
  
  function validarCorreo(valor) {
    // Utilizamos una expresión regular para validar el formato de un correo electrónico.
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(valor);
  }
  
  function validarTarjetaCredito(valor) {
    // Utilizamos una expresión regular para validar el formato de una tarjeta de crédito (número de 16 dígitos).
    return /^\d{16}$/.test(valor);
  }
  
  function validarLongitud(valor) {
    return valor.length >= 8;
  }
  
  function validarNumero(valor) {
    return /\d/.test(valor);
  }
  
  
