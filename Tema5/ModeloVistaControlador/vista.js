function vistaSimple(idDiv, arrayLibros)
{
    lista=document.createElement("ul");

    document.getElementById(idDiv).innerHTML="";

    for (let libro of arrayLibros){
        li = document.createElement("li")
        li.innerHTML=libro.titulo;

        lista.appendChild(li);
    }

    document.getElementById(idDiv).appendChild(lista);

}

function vistaCompleja(idDiv, arrayLibros)
{
    document.getElementById(idDiv).innerHTML="";

    for (let libro of arrayLibros){
        h1 = document.createElement("h1")
        h1.innerHTML=libro.titulo+" por "+libro.autor;

        document.getElementById(idDiv).appendChild(h1);
    }

    
}