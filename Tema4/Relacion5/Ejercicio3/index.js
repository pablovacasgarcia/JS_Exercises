window.onload=()=>{
  nombre=document.getElementById("nombre");
  lowercase=document.getElementById("lowercase");
  uppercase=document.getElementById("uppercase");
  chars=document.getElementById("chars");

  nombre.addEventListener("input", () => {validarNombre();})
  
}


function validarNombre(){
  const lower = /[a-z]+/;
  const upper = /[A-Z]+/;

  if(lower.test(nombre.value)){
    lowercase.style.display="none";
  } else {
    lowercase.style.display="block";
  }

  if(upper.test(nombre.value)){
    uppercase.style.display="none";
  } else {
    uppercase.style.display="block";
  }

  if (nombre.value.length>=6) {
    chars.style.display="none";
  } else {
    chars.style.display="block";
  }
}