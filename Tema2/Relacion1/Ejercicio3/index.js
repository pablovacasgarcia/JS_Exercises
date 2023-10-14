


segundos=60

function contador() {
    document.getElementById("contador").innerHTML=("<h1>"+segundos+"</h1>")
    segundos--
    if (segundos>=0){
        setTimeout(contador,1000)
    }
}

setTimeout(contador,1000)
