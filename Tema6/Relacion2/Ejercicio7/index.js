window.onload=()=>{
    inputCP=document.getElementById("localidad");
    BtnEnviar=document.getElementById("enviar");

    BtnEnviar.addEventListener("click", mostrarTiempo)
}

function mostrarTiempo(){
    if (inputCP!=""){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            document.getElementById("xml").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "index.php?CP="+inputCP.value, true);
        xhttp.send();
    }
    
}

