window.onload = () =>{
   fotos = document.querySelectorAll('img');

  posX=0;
  posY=0

  for (let i=0; i<fotos.length; i++){
    fotos[i].addEventListener("click", (event)=>
    {
      foto = event.target;
      moverFoto()
      posX = event.clientX - event.target.offsetLeft;
      posY = event.clientY - event.target.offsetTop;
    });
    }
  mover=false;
  function moverFoto(){
    mover=!mover
    
  }

  document.addEventListener("mousemove", (event) => {
    if (mover){
      foto.style.left=event.clientX-posX+"px";
      foto.style.top=event.clientY-posY+"px";
    }

  })



}