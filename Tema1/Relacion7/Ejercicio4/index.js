

function sumEveryOther (...arr){
    let resultado=0;
    for (let i=0; i<arr.length; i++){
        if (i%2==0){
            resultado += arr[i]
        }
    }

    return resultado
}

document.write(sumEveryOther (1,2,3,4,5,6))