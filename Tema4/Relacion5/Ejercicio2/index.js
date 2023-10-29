/*Crea un formulario típico de registro para tu web. Debe contener al menos campos para introducir 
nombre, apellidos, DNI, Teléfono, email y nombre de usuario. Todos los campos son obligatorios, 
y debes validar el mayor número posible de ellos haciendo uso de expresiones regulares. 
El nombre de usuario debe estar formado por al menos 8 caracteres, 
entre los cuales debe aparecer obligatoriamente algún número y algún signo de puntuación.*/


error=[];
window.onload=()=>{
  document.getElementById("enviar").style.display="none"

  nombre=document.getElementById("nombre");
  apellidos=document.getElementById("apellidos");
  dni=document.getElementById("dni");
  tlf=document.getElementById("telefono");
  email=document.getElementById("email");
  usuario=document.getElementById("usuario");

  errorNombre=document.getElementById("errorNombre");
  errorApellidos=document.getElementById("errorApellidos");
  errorDni=document.getElementById("errorDni");
  errorTlf=document.getElementById("errorTelefono");
  errorEmail=document.getElementById("errorEmail");
  errorUsuario=document.getElementById("errorUsuario");
  validarFormulario();

}

function validarNombre(){
  if (!(/^[a-zA-Z]+/.test(nombre.value))) {
    error["nombre"]="El nombre no es válido";
    errorNombre.style.display="block"
    errorNombre.innerHTML=error["nombre"];
  } else {
    errorNombre.style.display="none";
  }
}

function validarApellidos(apellidos){
  if (!/^[A-Za-z\s]+$/.test(apellidos)) {
    error["apellidos"]="Los apellidos no son válidos";
  } else {
    error["apellidos"]="";
  }
}

function validarDni(dni){
  if (!/^\d{8}[A-Za-z]$/.test(dni)) {
    error["dni"]="El DNI no es válido";
  } else {
    error["dni"]="";
  }
}

function validarTelefono(tlf){  
  if (!/^\+\d{2} \d{3} \d{3} \d{3}$/.test(tlf)) {
    error["tlf"]="El teléfono no es válido";
  } else {
    error["tlf"]="";
  }
}

function validarEmail(email){
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    error["email"]="El correo no es válido";
  } else {
    error["email"]="";
  }
}

function validarUsuario(usuario){
  if (!/^(?=.*[0-9])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&]{8,}$/.test(usuario)) {
    error["usuario"]="El usuario no es válido";
  } else {
    error["usuario"]="";
  }
}

function validarFormulario(){

  nombre.addEventListener("blur", ()=>{validarNombre()})

  validarNombre(nombre);
  validarApellidos(apellidos);
  validarDni(dni);
  validarTelefono(tlf);
  validarEmail(email);
  validarUsuario(usuario);

}