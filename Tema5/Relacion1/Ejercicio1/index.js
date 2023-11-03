/* Crea una página web con al menos tres párrafos de texto y dentro de ellos un número
indeterminado de enlaces (al menos uno debe enlazar a google). Haciendo tan sólo
uso del DOM muestra los siguientes datos:
• Número de enlaces de la página
• Dirección a la que enlaza el penúltimo enlace
• Numero de enlaces que enlazan a google
• Número de enlaces del tercer párrafo */

window.onload = () => {
  enlaces=document.querySelectorAll("a");
  console.log(numEnlaces=enlaces.length)

  console.log(enlaces[enlaces.length-2].href)

  google=0;
  enlaces.forEach(enlace => {
    if (enlace.textContent=="Google"){
      google++;
    }
  });
  console.log(google);

  parrafos=document.querySelectorAll("p");
  ultimoParrafo=parrafos[parrafos.length-1];

  enlacesUltimo=ultimoParrafo.querySelectorAll("a");

  console.log(enlacesUltimo.length)


}