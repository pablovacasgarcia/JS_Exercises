var num = prompt("Itroduce tu edad")
parseInt(num)


if (num<=5){
    document.write("Guardería")
} else if (num>6 && num<12){
    document.write("Primaria")
} else if (num>11 && num<17){
    document.write("ESO")
} else if (num>16 && num<21){
    document.write("Bachillerato")
} else {
    document.write("Universidad")
}