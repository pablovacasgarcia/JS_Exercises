
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
    if (encontrado){
        document.write("<br>La solucion es: "+tablero[posicion[0]][posicion[1]])
    } else {
        document.write("<br>Este tablero no tiene solucion")
    }
}

function crearTablero() {
    numeroAleatorio=0;
    const tablero = [];
    for (let i = 0; i < 5; i++) {
      tablero[i] = [];
      for (let j = 0; j < 5; j++) {
        // Genera un número aleatorio entre 11 y 55
        numeroAleatorio = Math.floor(Math.random() * 45) + 11;

        tablero[i][j]=numeroAleatorio;
      }
    }
    return tablero;
  }

  tablero=crearTablero()

  document.write(tablero)

  buscar(tablero)