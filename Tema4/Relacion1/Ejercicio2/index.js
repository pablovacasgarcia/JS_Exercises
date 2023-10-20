window.onload=()=>{
    document.body.addEventListener("mousemove", posicion);
}

function posicion(event){
    console.log(event.clientX+" "+event.clientY)
}