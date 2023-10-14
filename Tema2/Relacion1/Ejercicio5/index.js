

function reloj() {
    fecha = new Date();
    document.getElementById("reloj").innerHTML=("<h1>"+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()+"</h1>")
    setTimeout(reloj,1000)
}

setTimeout(reloj,1000)