function esMayuscula(palabra){
    if (palabra == palabra.toUpperCase()){
        resultado = "Está en mayúsculas"
    } else if (palabra == palabra.toLowerCase()){
        resultado = "Está en minúsculas"
    } else {
        resultado = "Hay mezcla de minúsculas y mayúsculas"
    }


    return resultado
}

document.write(esMayuscula("HOLa"))