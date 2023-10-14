

function contarPalabras(cadena){
    resultado=(cadena.replace(/ +/g, " ").trim().split(" ")).length

    return resultado
}


document.write(contarPalabras(" hola      me llamo pablo"))