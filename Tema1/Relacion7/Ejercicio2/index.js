

function addonlynums (...arr){
    let resultado=0;
    for (let i of arr){
        if (isNaN(i)){

        } else {
            i=parseInt(i)
            resultado += i
        }
        
    }

    return resultado
}

document.write(addonlynums (1,"coche",2,2))
