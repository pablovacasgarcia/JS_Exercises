i = 0;
lat=[]
lon=[]
distancia=0


function getDistanciaMetros(lat1,lon1,lat2,lon2)
{
  rad = function(x) {return x*Math.PI/180;}
  var R = 6378.137; //Radio de la tierra en km 
  var dLat = rad( lat2 - lat1 );
  var dLong = rad( lon2 - lon1 );
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * 
  Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  //aquí obtienes la distancia en metros por la conversion 1Km =1000m
  var d = R * c * 1000; 
  return d ; 
}

function obtengoPosicion(coordenadas){
    let latitude = coordenadas.coords.latitude
    let longitude = coordenadas.coords.longitude
    console.log(coordenadas)

    console.log("Latitud: " + latitude);
    console.log("Longitud: " + longitude);
    document.getElementById("map").innerHTML+=("<br> Latitud: " + latitude)
    document.getElementById("map").innerHTML+=(" Longitud: " + longitude)

    lat[i]=latitude
    lon[i]=longitude
    if (i>0){
        distancia+=getDistanciaMetros(lat[i-1],lon[i-1],lat[i],lon[i])

        console.log("Te has movido: "+distancia)
        document.getElementById("map").innerHTML+=(" Te has movido: "+distancia)
    }
    

    i++

}

if (navigator.geolocation){
    navigator.geolocation.watchPosition(obtengoPosicion)
} else {
    console.log("Geolocalizacion no permitida")
}

