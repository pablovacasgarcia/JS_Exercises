

function esPalindromo(cadena) {
    reversa = cadena.split("").reverse().join("")

    if (cadena.toLowerCase()==reversa.toLowerCase()){
        return cadena+ ", es un palíndromo"
    } else {
        return cadena+ ", no es palíndromo"
    }
}   


document.write(esPalindromo("hola")+"<br>")
document.write(esPalindromo("Ana"))