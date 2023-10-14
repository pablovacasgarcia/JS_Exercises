
palabra = "Jorge es guapo"

palabra = palabra.toUpperCase().split("")


document.write("<table><tr>")

for (let i=0; i<palabra.length; i++) {
    document.write("<td>"+palabra[i]+"</td>")
}
document.write("</tr>")

for (let i=1, j=palabra.length-2; i<palabra.length-1; i++, j--){
    
    document.write("<tr><td>"+palabra[i]+"</td>")
    for (let k=palabra.length-2; k>0; k--){
        document.write("<td> </td>")
    }
    document.write("<td>"+palabra[j]+"</td></tr>")
    
    
}

document.write("<tr>")
for (let i=palabra.length-1; i>=0; i--) {
    document.write("<td>"+palabra[i]+"</td>")
}
document.write("</tr></table>")

