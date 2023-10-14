suma=0
i=0

/* while (i<10){
    num = prompt("Introduce un número")
    num = parseInt(num)
    suma=suma+num
    i++
}*/

for (let i=0; i<10; i++) {
    num = prompt("Introduce un número")
    num = parseInt(num)
    suma=suma+num
}

document.write("La suma es: "+suma)