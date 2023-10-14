array=["Pablo Vacas Garcia", "Juan Gomez Romero", "Alba Perez Jimenez"]

array.forEach(nombre => {
    cadena=nombre
    cadena.split("")

    if (cadena[0]=="J"){
        document.write (nombre+"<br>")
    }

});

iniciales=[]
let j=0
array.forEach(nombre => {
    cadenas=nombre.split(" ")
    iniciales[j]=""
    for(let i=0; i<cadenas.length; i++){
        cadena=cadenas[i].split("")
        inicial=cadena[0]
        console.log(inicial)
        iniciales[j]=iniciales[j]+inicial
    }

    j++
});

iniciales.sort();
document.write(iniciales)