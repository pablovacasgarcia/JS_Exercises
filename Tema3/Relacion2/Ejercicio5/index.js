function paresImpares() {
    const numerosAleatorios = [];
    const numerosPares = [];
    const numerosImpares = [];
  
    // Generar 100 números aleatorios entre 1 y 1000
    for (let i = 0; i < 100; i++) {
      numerosAleatorios.push(Math.floor(Math.random() * 1000) + 1);
    }
  
    console.log("Contenido del array original:");
    console.log(numerosAleatorios);
  
    // Separar los números en pares e impares
    for (const numero of numerosAleatorios) {
      if (numero % 2 === 0) {
        numerosPares.push(numero);
      } else {
        numerosImpares.push(numero);
      }
    }
  
    // Mostrar los números organizados
    console.log("Números pares:");
    console.log(numerosPares);
  
    console.log("Números impares:");
    console.log(numerosImpares);
  }
  
  paresImpares();
  