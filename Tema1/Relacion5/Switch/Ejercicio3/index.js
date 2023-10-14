num1 = prompt("Introduce un número")
num1=parseFloat(num1)
num2 = prompt("Introduce otro número")
num2=parseFloat(num2)

op = prompt("Que quieres hacer (+,-,*,/)")

switch(op){
    case("+"):
        document.write(num1+num2)
        break
    case("-"):
        document.write(num1-num2)
        break
    case("*"):
        document.write(num1*num2)
        break
    case("/"):
        document.write(num1/num2)
        break
}