var num = prompt("Introduce el número de hermanos")
parseInt(num)
var precio = prompt("Introduce el precio")
parseInt(precio)


if (num>=3){
    precio = precio-((precio/100)*15)
    document.write(precio)
} else if (num<3 && num>0){
    precio = precio-((precio/100)*10)
    document.write(precio)
} else {
    document.write(precio)
}