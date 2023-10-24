window.onload = () =>{
  const foto = document.querySelector('img');

  posX=0;
  posY=0;

  foto.addEventListener("click", (event)=>
  {

    moverFoto()
  });
  mover=false;
  function moverFoto(){
    mover=!mover
    
  }

  document.addEventListener("mousemove", (event) => {
    if (mover){
      foto.style.left=event.clientX-50+"px";
      foto.style.top=event.clientY-50+"px";
    }

  })



}