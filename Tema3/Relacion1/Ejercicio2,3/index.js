function lanzamiento (){
    return parseInt(Math.random() * (7 - 1) + 1);
}

function cuentaNum (numTiradas){
    numeros=[]
    numeros[0]=0
    numeros[1]=0
    numeros[2]=0
    numeros[3]=0
    numeros[4]=0
    numeros[5]=0
    for (let i=0; i<numTiradas; i++){
        cara = lanzamiento()-1
        numeros[cara]++
    }
    return numeros
}

vecesNum=cuentaNum(6000)

for (let i=0; i<vecesNum.length; i++){
    document.write("El numero "+(i+1)+" sale "+vecesNum[i]+" veces<br>")
}