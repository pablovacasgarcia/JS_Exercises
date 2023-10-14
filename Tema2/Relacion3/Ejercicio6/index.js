

function borraRepetidos(cadena){
    resultado=""
    for (let i=0; i<cadena.length; i++){
        if (resultado.includes(cadena.charAt(i))){
        } else {
            resultado = resultado+cadena.charAt(i)
        }
    }

    return resultado
}

document.write(borraRepetidos("hollaa  miiigueel   "))