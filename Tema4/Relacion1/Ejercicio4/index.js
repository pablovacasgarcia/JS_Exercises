window.onload = () => {
    createCanvas();
    paintCell();
  };
  
  function createCanvas() {
    const canvas = document.getElementById("canvas");
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
    }
    // Si no se pulsa Ctrl ni Shift, no se pinta nada
  }