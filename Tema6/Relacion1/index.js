// Cargar comunidades al cargar la página
window.onload = () => {

    comunidades = document.getElementById("comunidad");
    provincias = document.getElementById("provincia");
    municipios = document.getElementById("municipio");
    tiempoDiv = document.getElementById("tiempo")

    loadComunidades();
    comunidades.addEventListener("input", loadProvincias);
    provincias.addEventListener("input", loadMunicipios);
    municipios.addEventListener("input", loadWeather);
  }

  geoapiKey = "b7b3d1f31f328c070ef1fb97e250ba4281baee7944a2105f6b4dd136c73cf3f4";

  function loadComunidades() {
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              datos = JSON.parse(this.responseText);
              datos.data.forEach(comunidad => {
                const option = document.createElement("option");
                option.value = comunidad.CCOM; 
                option.text = comunidad.COM;  
                comunidades.appendChild(option);
              });
              comunidades.selectedIndex=-1;
          }
      };
      xhttp.open("GET", 'https://apiv1.geoapi.es/comunidades?key=' + geoapiKey, true);
      xhttp.send();
  }

  function loadProvincias() {
    provincias.innerHTML="";
    comunidadId = comunidades.value;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            datos = JSON.parse(this.responseText);
              datos.data.forEach(provincia => {
                const option = document.createElement("option");
                option.value = provincia.CPRO;
                option.text = provincia.PRO; 
                provincias.appendChild(option);
              });
              provincias.selectedIndex=-1;
          }
      };
      xhttp.open("GET", 'https://apiv1.geoapi.es/provincias?CCOM=' + comunidadId + '&key=' + geoapiKey, true);
      xhttp.send();
  }

  function loadMunicipios() {
    municipios.innerHTML="";
    provinciaId = provincias.value;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            datos = JSON.parse(this.responseText);
            datos.data.forEach(municipio => {
              const option = document.createElement("option");
              option.value = municipio.CMUM;
              option.text = municipio.DMUN50; 
              municipios.appendChild(option);
            });
            municipios.selectedIndex=-1;
          }
      };
      xhttp.open("GET", 'https://apiv1.geoapi.es/municipios?CPRO=' + provinciaId + '&key=' + geoapiKey, true);
      xhttp.send();
  }






  function loadWeather() {
    var municipioId = document.getElementById('municipio').value;
    var apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYWJsb3ZhY2FzZ2FyY2lhQGdtYWlsLmNvbSIsImp0aSI6IjY5YmFmYjJkLTU0NjYtNDdhMC1iMWM4LTE1MjA1YzllYTQwOSIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzAwNTE4MTc3LCJ1c2VySWQiOiI2OWJhZmIyZC01NDY2LTQ3YTAtYjFjOC0xNTIwNWM5ZWE0MDkiLCJyb2xlIjoiIn0.TuKG2F064_qsNuJOAXqAO687vsAWbRAYUmTE4hrHFeA';

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            datos = JSON.parse(this.responseText);
            var xhttp = new XMLHttpRequest();

                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                      tiempo = JSON.parse(this.responseText)[0].prediccion.dia;
                      tiempoDiv.innerHTML="";

                      tiempo.forEach(dia => {
                        const fecha = document.createElement("p");
                        fecha.innerHTML = "Fecha: " + dia.fecha.split("T")[0];
                        tiempoDiv.appendChild(fecha);

                        const maxima = document.createElement("p");
                        maxima.innerHTML += "Temperatura máxima: " + dia.temperatura.maxima;
                        tiempoDiv.appendChild(maxima);

                        const minima = document.createElement("p");
                        minima.innerHTML += "Temperatura mínima: " + dia.temperatura.minima;
                        tiempoDiv.appendChild(minima);
                      });
                    }
                };
                xhttp.open("GET",  datos.datos, true);
                xhttp.send();
          }
      };
      xhttp.open("GET", 'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/'+provinciaId + municipioId+'/?api_key=' + apiKey, true);
      xhttp.send();
}

  function displayWeather(weatherData) {
    // Aquí puedes manejar y mostrar la información meteorológica en tu página
    console.log(weatherData);
  }