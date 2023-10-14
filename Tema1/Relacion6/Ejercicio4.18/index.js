var col = prompt("Introduce el numero de columnas")
col=parseInt(col)
var fil = prompt("Introduce el numero de filas")
fil=parseInt(fil)
var height =prompt("Introduce el alto de las celdas")
var width = prompt("Introduce el ancho de las celdas")


document.write("<table border=\"0\", cellspacing=\"2\", bgcolor=\"black\", width=\""+width*col+"\">")
for (let i=0; i<fil; i++){
    document.write("<tr bgcolor=\"white\", height=\""+height+"\">")
    
    for (let j=0; j<col; j++){
        document.write("<td width=\""+width+"\" > &nbsp;</td>")
    }
}
document.write("</tr></table>")

