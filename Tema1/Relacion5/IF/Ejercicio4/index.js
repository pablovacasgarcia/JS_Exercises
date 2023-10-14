var num = prompt("Itroduce el precio")
parseInt(num)


if (num>100){
    precio = num-((num/100)*15)
    document.write(precio)
} 