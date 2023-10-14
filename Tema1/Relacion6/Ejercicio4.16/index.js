var num = prompt("Introduce un número")
num=parseInt(num)


do {
    var num2 = prompt("Introduce un número")
    num2=parseInt(num2)

    if (num2==num){
        alert("Son el mismo número")
    } else if (num2>num){
        alert("Más abajo")
    } else if (num2<num) {
        alert("Más arriba")
    }
} while (num!=num2)