var num = prompt("Itroduce tu edad")
parseInt(num)

var localidad = prompt("Introduce tu localidad")

if (num>=18 && num<=30 && localidad=="Madrid"){
    document.write("Enhorabuena puedes acceder")
} else {
    document.write("Lo siento no puedes acceder")
}