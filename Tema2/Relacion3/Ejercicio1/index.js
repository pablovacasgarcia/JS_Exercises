function invierteCadena(cad_arg){
    return cad_arg.split(" ").reverse().join(" ")
}

function inviertePalabras(cad_arg){
    return cad_arg.split("").reverse().join("")
}

function encuentraPalabraMasLarga(cad_arg){
    solucion=0
    cad_arg=cad_arg.split(" ")

    for (let i of cad_arg){
        if (i.length>solucion){
            solucion=i.length
        }
    }

    return solucion

}

function filtraPalabrasMasLargas(cad_arg, i){
    solucion=0
    cad_arg=cad_arg.split(" ")

    for (let j of cad_arg){
        if (j.length>i){
            solucion++
        }
    }

    return solucion
}

function cadenaBienFormada(cad_arg){
    solucion=cad_arg.charAt(0).toUpperCase()+cad_arg.slice(1).toLowerCase()

    return solucion;
}

document.write(invierteCadena("jorge es muy guapo")+"<br>")
document.write(inviertePalabras("chulo")+"<br>")
document.write(encuentraPalabraMasLarga("jorge es muy guapo")+"<br>")
document.write(filtraPalabrasMasLargas("jorge es muy guapo", 4)+"<br>")
document.write(cadenaBienFormada("jorge es MUY guapo")+"<br>")