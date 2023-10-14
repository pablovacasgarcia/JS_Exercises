tablero=[[34,21,32,41,25],[14,42,43,14,31],[54,45,52,42,23],[33,15,51,31,35],[21,52,33,13,23]]



function buscar(tablero){
    encontrado=false
    posicion=[0,0]

    while(!encontrado){
        fila=posicion[0]
        columna=posicion[1]
        if((posicion[0]+1==Math.floor(tablero[posicion[0]][posicion[1]]/10))  &&  (posicion[1]+1==tablero[posicion[0]][posicion[1]]%10)){
            encontrado=true
        } else {
            posicion[0]=(Math.floor(tablero[fila][columna]/10))-1
            posicion[1]=(tablero[fila][columna]%10)-1
            document.write(tablero[fila][columna]+"<br>")
        }
    }
}



  buscar(crearTablero())