window.onload=()=>{

    //Iniciamos la app

    //Creo los datos
    miListaLibros = new ListaLectura;

    //Defino eventos
    document.getElementById("btnAñadir").addEventListener("click", añadirLibro);
}

function añadirLibro(){
    titulo=document.getElementById("inputTitulo").value
    autor=document.getElementById("inputAutor").value
    año=document.getElementById("inputAño").value

    let nuevoLibro = new Libro(titulo, autor, año);

    miListaLibros.addLibro(nuevoLibro);

    actualizarvista();
}

function actualizarvista(){
    vistaCompleja("misLibros", miListaLibros.listaLibros);
}