
function suma (...arr){
    let resultado=0;
    for (let i of arr){
        resultado += i
    }

    return resultado
}

document.write(suma (1,2,3,4,5,6))