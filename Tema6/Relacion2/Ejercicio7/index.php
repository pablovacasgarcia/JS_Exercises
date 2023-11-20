<?php

    if (isset($_GET['CP'])){
        $CP=$_GET['CP'];

        $url="http://www.aemet.es/xml/municipios/localidad_".$CP.".xml";

        $datos=file_get_contents($url);

        echo $datos;
    }

?>