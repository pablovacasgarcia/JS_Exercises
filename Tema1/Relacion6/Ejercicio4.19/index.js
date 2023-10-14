var width = prompt("Introduce el ancho de las celdas")


document.write("<table border=\"0\", cellspacing=\"2\", bgcolor=\"black\", width=\""+width*8+"\">")
for (let i=0; i<8; i++){
    document.write("<tr bgcolor=\"white\", height=\""+width+"\">")
    
    for (let j=0; j<8; j++){
        if (i%2==0){
            if (j%2==0){
                document.write("<td bgcolor=\"black\", width=\""+width+"\" > &nbsp;</td>")
            } else {
                document.write("<td width=\""+width+"\" > &nbsp;</td>")
            }
        } else {
            if (j%2==0){
                document.write("<td width=\""+width+"\" > &nbsp;</td>")
            } else {
                document.write("<td bgcolor=\"black\", width=\""+width+"\" > &nbsp;</td>")
            }
        }
    }
}
document.write("</tr></table>")