function factorial (num){
    if (num==1){
        return num
    } else {
        return num*factorial(num-1)
    }
}

document.write("<table>")
for (let i=1; i<=10; i++){
    document.write("<tr><td>"+i+"</td><td>"+factorial(i)+"</td></tr>")
}
document.write("</table>")