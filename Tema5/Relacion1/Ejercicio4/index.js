/*Crea una web con una lista de elementos y un botón que cada vez que pulsemos
introduzca una entrada nueva en la lista.*/

window.onload = () => {
    boton = document.getElementById("boton");
    lista = document.getElementById("lista");

    i = 1;
    boton.addEventListener("click", () => {
        li = document.createElement("li")
        li.innerHTML = "Tengo " + i + " perros";
        i++
        lista.appendChild(li);
    })
}