window.onload=()=>{
  // Define un array con las rutas de las imágenes que quieres mostrar
  images = [
    'imagen1.jpg',
    'imagen2.jpg',
    'imagen3.jpg'
  ];

    // Obtén elementos del DOM
  imageContainer = document.getElementById('image-container');
  imageElement = document.getElementById('image');
  prevButton = document.getElementById('prev-button');
  nextButton = document.getElementById('next-button');
  
  // Agrega event listeners a los botones
  prevButton.addEventListener('click', showPreviousImage);
  nextButton.addEventListener('click', showNextImage);

  // Muestra la primera imagen al cargar la página
  displayImage();

}

let currentImageIndex = 0;

// Función para mostrar la imagen actual
function displayImage() {
  imageElement.src = images[currentImageIndex];
  imageElement.alt = `Imagen ${currentImageIndex + 1}`;
}

// Función para mostrar la imagen anterior
function showPreviousImage() {
  if (currentImageIndex > 0) {
      currentImageIndex--;
      displayImage();
  }
}

// Función para mostrar la siguiente imagen
function showNextImage() {
  if (currentImageIndex < images.length - 1) {
      currentImageIndex++;
      displayImage();
  }
}

