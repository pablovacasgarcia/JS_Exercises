document.write(Math.floor(Math.random())+"<br>")
document.write((Math.floor(Math.random() * (200 - 100)) + 100)+"<br>")

min = prompt("Introduce el minimo")
min = parseInt(min)
max = prompt("Introduce el maximo")
max = parseInt(max)

document.write((Math.floor(Math.random() * (max - min)) + min)+"<br>")