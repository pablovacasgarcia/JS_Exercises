window.onload = () => {
    crearTabla();
    const boton = document.getElementById("botonBorrar");
    boton.addEventListener("click", borrar);

  
  function crearTabla() {
    const canvas = document.getElementById("tabla");
    for (let i = 0; i < 100; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 100; j++) {
        const cell = document.createElement("td");
        cell.addEventListener("mousemove", paintCell);
        row.appendChild(cell);
      }
      canvas.appendChild(row);
    }
  }
  
  function paintCell(event) {
    if (event.ctrlKey) {
      event.target.style.backgroundColor = "red";
    } else if (event.shiftKey) {
      event.target.style.backgroundColor = "blue";
    } else if (event.altKey) {
      event.target.style.backgroundColor = "white";
    }
    
  }

  function borrar() {
    const cells = document.querySelectorAll("td");
    cells.forEach(cell => {
      cell.style.backgroundColor = "white";
    });
  }
}