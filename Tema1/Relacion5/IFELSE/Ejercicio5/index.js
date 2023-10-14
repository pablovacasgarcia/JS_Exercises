var ex1 = prompt("Itroduce la nota del examen 1")
ex1=parseFloat(ex1)
var ex2 = prompt("Itroduce la nota del examen 2")
ex2=parseFloat(ex2)
var tr1 = prompt("Itroduce la nota del trabajo 1")
tr1=parseFloat(tr1)
var tr2 = prompt("Itroduce la nota del trabajo 2")
tr2=parseFloat(tr2)

media = (((ex1+ex2)/2)*0.75)+(((tr1+tr2)/2)*0.25)


if (ex1<4.5 || ex2<4.5 || tr1<4.5 || tr2<4.5 || media<5){
    document.write("Tu media es " + media + " : Suspenso")
} else {
    document.write("Tu media es " + media + " : Aprobado")
}