class TresEnRaya{
  constructor(){
    this.tablero=this.crearTablero();
    this.turno = "X";
  }

  crearTablero(){
    let tablero=[];

    for (let i=0;i<3;i++){
      tablero[i]=[];
      for (let j=0; j<3; j++){
        tablero[i][j]=" ";
      }
    }

    return tablero;

  }

  mostrarTablero() {
    for (let fila = 0; fila < 3; fila++) {
      let filaStr = "";
      for (let columna = 0; columna < 3; columna++) {
        filaStr += this.tablero[fila][columna];
        if (columna < 2) {
          filaStr += " | ";
        }
      }
      console.log(filaStr);
    }
    console.log("---------");
  }

  jugar() {
    console.log("Comienza el juego de Tres en Raya.");
    
    while (true) {
      this.mostrarTablero();
      const fila = prompt(`Jugador ${this.turno}, elige una fila (0, 1, 2):`);
      const columna = prompt(`Jugador ${this.turno}, elige una columna (0, 1, 2):`);
  
      if (fila === null || columna === null) {
        console.log("El juego ha sido cancelado.");
        break;
      }
  
      const filaNum = parseInt(fila);
      const columnaNum = parseInt(columna);
  
      if (!isNaN(filaNum) && !isNaN(columnaNum)) {
        if (this.tablero[filaNum][columnaNum] === " ") {
          this.colocarCaracter(filaNum, columnaNum, this.turno);
  
          if (this.hayGanador()) {
            this.mostrarTablero();
            console.log(`¡Jugador ${this.turno} ha ganado!`);
            break;
          } else if (this.tableroLleno()) {
            this.mostrarTablero();
            console.log("¡Empate!");
            break;
          } else {
            this.turno = this.turno === "X" ? "O" : "X"; // Alternar entre X y O
          }
        } else {
          console.log("La casilla seleccionada ya está ocupada. Elige otra.");
        }
      } else {
        console.log("Por favor, ingresa valores válidos (números del 0 al 2).");
      }
    }
  }
  
  colocarCaracter(fila, columna, caracter) {
    if (fila >= 0 && fila < 3 && columna >= 0 && columna < 3) {
      this.tablero[fila][columna] = caracter;
    } else {
      console.log("Fila y columna fuera de rango.");
    }
  }
  
  hayGanador() {
    // Comprobación de filas
    for (let i = 0; i < 3; i++) {
      if (this.tablero[i][0] === this.turno && this.tablero[i][1] === this.turno && this.tablero[i][2] === this.turno) {
        return true;
      }
    }

    // Comprobación de columnas
    for (let j = 0; j < 3; j++) {
      if (this.tablero[0][j] === this.turno && this.tablero[1][j] === this.turno && this.tablero[2][j] === this.turno) {
        return true;
      }
    }

    // Comprobación de diagonales
    if ((this.tablero[0][0] === this.turno && this.tablero[1][1] === this.turno && this.tablero[2][2] === this.turno) ||
        (this.tablero[0][2] === this.turno && this.tablero[1][1] === this.turno && this.tablero[2][0] === this.turno)) {
      return true;
    }

    return false;
  }

  tableroLleno() {
    for (let fila = 0; fila < 3; fila++) {
      for (let columna = 0; columna < 3; columna++) {
        if (this.tablero[fila][columna] === " ") {
          return false;
        }
      }
    }
    return true;
  }
}

const juego = new TresEnRaya();
juego.jugar();