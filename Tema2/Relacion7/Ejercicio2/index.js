function obtengoPosicion(coordenadas){
    let latitude = coordenadas.coords.latitude
    let longitude = coordenadas.coords.longitude
    console.log(coordenadas)
    var map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([latitude, longitude]).addTo(map);

}

if (navigator.geolocation){
    navigator.geolocation.watchPosition(obtengoPosicion)
} else {
    console.log("Geolocalizacion no permitida")
}

