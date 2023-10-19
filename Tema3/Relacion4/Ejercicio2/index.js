class TresEnRaya{
  constructor(){
    this.tablero=this.crearTablero();
  }

  crearTablero(){
    let tablero=[];

    for (let i=0;i<3;i++){
      tablero[i]=[];
      for (let j=0; j<3; j++){
        tablero[i][j]="&nbsp";
      }
    }

    return tablero;

  }

  mostrarTablero() {
    document.write("<table>") ;
    this.tablero.forEach(fila => {
      document.write("<tr>") ;
      fila.forEach(valor => {
        document.write("<td>" + valor + "</td>") ;
      });
      document.write("</tr>") ;
    });
    document.write("</table>") ;
    
  }

  colocarCaracter(fila, columna, caracter) {
    if (fila >= 0 && fila < 3 && columna >= 0 && columna < 3) {
      this.tablero[fila][columna] = caracter;
    } else {
      console.log("Fila y columna fuera de rango.");
    }
  }
  
}

prueba = new TresEnRaya;
prueba.mostrarTablero();