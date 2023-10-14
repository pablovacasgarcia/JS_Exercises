/*window.addEventListener("scroll", scrollInfinito);

function scrollInfinito(){

    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop= document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;

    if ((scrollTop + clientHeight) > (scrollHeight-10)){
        document.getElementById("etiqueta").innerHTML+="SALTA SCROLL<br><br><br><br><br><br><br><br><br><br>"
    }
}*/

window.addEventListener("scroll", anchoInfinito);

function anchoInfinito(){

    let scrollWidth = document.documentElement.scrollWidth;
    let scrollleft= document.documentElement.scrollLeft;
    let clientWidth = document.documentElement.clientWidth;

    if ((scrollleft + clientWidth) > (scrollWidth-10)){
        document.getElementById("etiqueta").innerHTML+="<aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa>"
    }
}