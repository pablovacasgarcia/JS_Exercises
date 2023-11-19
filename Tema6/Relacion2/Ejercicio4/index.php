<?php

if (isset($_REQUEST['user'])){
    $usuario=$_REQUEST['user'];
    if ($usuario!="Pablo"){
        echo "El usuario no es válido<br>";
        echo "Aquí tienes otras alternativas:<br>";
        echo $usuario."_999<br>";
        echo "._.".$usuario."._.";
    }
}




?>