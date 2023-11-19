window.onload=()=>{
    inputUsuario=document.getElementById("user");
    BtnEnviar=document.getElementById("enviar");

    inputUsuario.addEventListener("input", comprobarNombre)
}

function comprobarNombre(){
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            document.getElementById("error").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "index.php?user="+inputUsuario.value, true);
        xhttp.send();
}