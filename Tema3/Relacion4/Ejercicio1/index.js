class Puzzle {
    constructor(dimension) {
      this.BLANCO = "";
      this.dimension = dimension;
      this.solucion = this.creartablero(dimension);
      this.tablero =this.creartablero(dimension);
      this.tablero = this.desordenar(this.tablero);
      this.posBlanco = this.buscarBlanco(this.tablero);
    }
  
    creartablero(dimension) {
      let tablero = [];
      let numero = 1;
      for (let i = 0; i < dimension; i++) {
        tablero[i] = [];
        for (let j = 0; j < dimension; j++) {
          tablero[i][j] = numero;
          numero++;
          if (numero == dimension * dimension) {
            tablero[i][j] = this.BLANCO;
          }
        }
      }
      return tablero;
    }
  
    desordenar(tablero) {
      for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
          let fila = Math.floor(Math.random() * tablero.length);
          let columna = Math.floor(Math.random() * tablero[i].length);
          let auxiliar = tablero[fila][columna];
          tablero[fila][columna] = tablero[i][j];
          tablero[i][j] = auxiliar;
        }
      }
      return tablero;
    }
  
    buscarBlanco(tablero) {
      for (let filaIndex = 0; filaIndex < tablero.length; filaIndex++) {
        for (let columnaIndex = 0; columnaIndex < tablero[filaIndex].length; columnaIndex++) {
          if (tablero[filaIndex][columnaIndex] === this.BLANCO) {
            return [filaIndex, columnaIndex];
          }
        }
      }
    }
  
    mostrarTablero() {
      let output = "<table>";
      this.tablero.forEach(fila => {
        output += "<tr>";
        fila.forEach(valor => {
          output += "<td>" + valor + "</td>";
        });
        output += "</tr>";
      });
      output += "</table>";
      document.getElementById("tablero").innerHTML = output;
    }
  
    comprobarSolucion() {
      return this.tablero.every((fila, filaIndex) =>
        fila.every((casilla, columnaIndex) =>
          casilla === this.solucion[filaIndex][columnaIndex]
        )
      );
    }
  
    mover(direccion) {
        const [filaBlanco, columnaBlanco] = this.posBlanco;
        switch (direccion) {
          case "U":
            if (filaBlanco < this.dimension - 1) {
              this.tablero[filaBlanco][columnaBlanco] = this.tablero[filaBlanco + 1][columnaBlanco];
              this.tablero[filaBlanco + 1][columnaBlanco] = this.BLANCO;
              this.posBlanco = [filaBlanco + 1, columnaBlanco];
            }
            break;
          case "D":
            if (filaBlanco > 0) {
              this.tablero[filaBlanco][columnaBlanco] = this.tablero[filaBlanco - 1][columnaBlanco];
              this.tablero[filaBlanco - 1][columnaBlanco] = this.BLANCO;
              this.posBlanco = [filaBlanco - 1, columnaBlanco];
            }
            break;
          case "L":
            if (columnaBlanco < this.dimension - 1) {
              this.tablero[filaBlanco][columnaBlanco] = this.tablero[filaBlanco][columnaBlanco + 1];
              this.tablero[filaBlanco][columnaBlanco + 1] = this.BLANCO;
              this.posBlanco = [filaBlanco, columnaBlanco + 1];
            }
            break;
          case "R":
            if (columnaBlanco > 0) {
              this.tablero[filaBlanco][columnaBlanco] = this.tablero[filaBlanco][columnaBlanco - 1];
              this.tablero[filaBlanco][columnaBlanco - 1] = this.BLANCO;
              this.posBlanco = [filaBlanco, columnaBlanco - 1];
            }
            break;
        }
      }
    
  
    jugar() {
      this.resuelto = false;
      let movimientos = 0;
      while (!this.resuelto) {
        this.mostrarTablero();
        let movimiento = prompt("Elige movimiento: U, D, L, R");
        this.mover(movimiento);
        movimientos++;
        if (this.comprobarSolucion()) {
          this.resuelto = true;
          this.mostrarTablero();
          alert(`¡Puzzle resuelto en ${movimientos} movimientos!`);
        }
      }
    }
  }
  
  

  document.addEventListener("DOMContentLoaded", function () {
    const puzzleContainer = document.getElementById("puzzle-container");
    const moveUpButton = document.getElementById("move-up");
    const moveDownButton = document.getElementById("move-down");
    const moveLeftButton = document.getElementById("move-left");
    const moveRightButton = document.getElementById("move-right");
  
    const puzzle = new Puzzle(3); // Cambia la dimensión según lo desees.
    puzzle.mostrarTablero();
  
    moveUpButton.addEventListener("click", () => {
      puzzle.mover("U");
      puzzle.mostrarTablero();
      if (puzzle.comprobarSolucion()) {
        alert("¡Puzzle resuelto!");
      }
    });
  
    moveDownButton.addEventListener("click", () => {
      puzzle.mover("D");
      puzzle.mostrarTablero();
      if (puzzle.comprobarSolucion()) {
        alert("¡Puzzle resuelto!");
      }
    });
  
    moveLeftButton.addEventListener("click", () => {
      puzzle.mover("L");
      puzzle.mostrarTablero();
      if (puzzle.comprobarSolucion()) {
        alert("¡Puzzle resuelto!");
      }
    });
  
    moveRightButton.addEventListener("click", () => {
      puzzle.mover("R");
      puzzle.mostrarTablero();
      if (puzzle.comprobarSolucion()) {
        alert("¡Puzzle resuelto!");
      }
    });
  });
  
  