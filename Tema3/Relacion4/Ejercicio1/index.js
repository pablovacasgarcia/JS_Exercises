/*Puzzle. Se desea implementar una web para la realizaci n de puzzles. Un puzzle no es ó
m s que un tablero cuadrado con un hueco que podemos mover y que permite á
reordenar las piezas. Se pide por tanto la implementaci n de una clase que represente ó
este juego teniendo en cuenta:
1. La dimensi n puede variar, se escoger en la creaci n. ó á ó
2. El espacio en blanco s lo se mueve arriba, abajo, izquierda, derecha, controlando ó
por supuesto que sea un movimiento v lido. á
3. Debe llevarse un control del tiempo m nimo para resolverlo, as como el n mero de í í ú
movimientos realizados.
4. Los tableros se generar n aleatoriamente. á
5. Implementar s un m todo dibujar() que imprimir en pantalla el tablero para poder á é á
ser probado.*/


class Puzzle{
    BLANCO="";
    constructor(dimension){
        this.solucion=this.creartablero(dimension);
        this.tablero=this.desordenar(this.solucion);
        this.posBlanco=this.buscarBlanco(this.tablero);
    }


    creartablero(dimension){
        this.tablero=[];
        this.numero=1;
        for (let i=0; i<dimension; i++){
            this.tablero[i]=[];
            for (let j=0; j<dimension; j++){
                this.tablero[i][j]=this.numero;
                this.numero++;
                if (this.numero==dimension*dimension){
                    this.tablero[i][j]=this.BLANCO;
                }
            }
        }
        return this.tablero;
    }

    desordenar(tablero){
        for (let i=0; i<tablero.length; i++){
            for (let j=0; j<tablero[i].length; j++){
                this.fila = Math.floor(Math.random() * tablero.length);
                this.columna = Math.floor(Math.random() * tablero[i].length);
                this.auxiliar=tablero[this.fila][this.columna];
                tablero[this.fila][this.columna]=tablero[i][j];
                tablero[i][j]=this.auxiliar;
            }
        }
        return tablero;
    }

    buscarBlanco(){
        this.tablero.map((fila, filaIndex) => {
            return fila.map((casilla, columnaIndex) => {
              if (casilla === this.BLANCO) {
                return [filaIndex, columnaIndex];
              }
            });
          });
    }

    mostrarTablero(){
        document.write("<table>");
        this.tablero.forEach(fila => {
            document.write("<tr>")

            fila.forEach(valor => {
                document.write("<td>"+valor+"</td>");
            });

            document.write("</tr>")
        });
        document.write("</table>");
    }

    comprobarSolucion(){
        return this.tablero.every((fila, filaIndex) =>
        fila.every((casilla, columnaIndex) =>
          casilla === this.solucion[filaIndex][columnaIndex]
        )
      );
    }

    mover(direccion){
        switch (direccion){
            case "U":
                this.tablero[this.posBlanco[0]][this.posBlanco[1]]=this.tablero[this.posBlanco[0]+1][this.posBlanco[1]]
                this.tablero[this.posBlanco[0]+1][this.posBlanco[1]]=this.BLANCO;
                break;
            case "D":
                this.tablero[this.posBlanco[0]][this.posBlanco[1]]=this.tablero[this.posBlanco[0]-1][this.posBlanco[1]]
                this.tablero[this.posBlanco[0]-1][this.posBlanco[1]]=this.BLANCO;
                break;
            case "L":
                this.tablero[this.posBlanco[0]][this.posBlanco[1]]=this.tablero[this.posBlanco[0]][this.posBlanco[1]-1]
                this.tablero[this.posBlanco[0]][this.posBlanco[1]-1]=this.BLANCO;
                break;
            case "R":
                this.tablero[this.posBlanco[0]][this.posBlanco[1]]=this.tablero[this.posBlanco[0]][this.posBlanco[1]+1]
                this.tablero[this.posBlanco[0]][this.posBlanco[1]+1]=this.BLANCO;
                break;
        }
    }

    jugar(){
        this.resuelto=false;

        while(!this.resuelto){
            this.mostrarTablero();

            this.mover(promt("Elige movimiento: U, D, L, R"))

        }
    }
}

puzzle = new Puzzle(5);

puzzle.jugar();