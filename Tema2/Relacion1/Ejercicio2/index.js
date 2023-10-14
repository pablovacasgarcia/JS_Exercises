

fechaHoy = new Date()
fecha85 = new Date()
fecha85.setDate(fecha85.getDate() + 85)
fecha187 = new Date()
fecha187.setDate(fecha187.getDate() - 187)
fecha2 = new Date(fecha85)
fecha2.setFullYear(fecha2.getFullYear() +2)
fecha24 = new Date(fecha187)
fecha24.setHours(fecha24.getHours() -24)
fechaResto = new Date(fecha85-fecha187)

document.write(fechaHoy+"<br>")

document.write(fecha85+"<br>")

document.write(fecha187+"<br>")

document.write(fecha2+"<br>")

document.write(fecha24+"<br>")

document.write(fechaResto+"<br>")