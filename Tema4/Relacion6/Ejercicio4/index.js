/*Crea 3 funciones genéricas para el manejo de cookies:
    a) CrearCookie(identificador,valor,fechaExpiracion): Crea la cookie con sólo un par identificador=valor.
    b) LeerCookie(identificador): Devuelve el valor dentro de la cookie para el identificador indicado si existe o null en caso contrario.
    c) BorrarCookie().*/


    window.onload=()=>{
      crearCookie("Pablo", "Vacas", new Date().now);

      console.log(leerCookie("Pablo"));
      document.write(document.cookie)


    }

// a) CrearCookie(identificador, valor, fechaExpiracion)
function crearCookie(identificador, valor, fechaExpiracion) {
  if (typeof identificador !== 'string' || typeof valor !== 'string') {
    console.error('El identificador y el valor deben ser cadenas de texto.');
    return;
  }

  let cookie = `${(identificador)}=${(valor)}`;

  if (fechaExpiracion) {
    cookie += `; expires=${fechaExpiracion.toUTCString()}`;
  }

  document.cookie = cookie;
}

// b) LeerCookie(identificador)
function leerCookie(identificador) {
  if (typeof identificador !== 'string') {
    console.error('El identificador debe ser una cadena de texto.');
    return null;
  }

  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieIdentificador, cookieValor] = cookie.trim().split('=');
    if ((cookieIdentificador) === identificador) {
      return (cookieValor);
    }
  }

  return null;
}

// c) BorrarCookie(identificador)
function borrarCookie(identificador) {
  if (typeof identificador !== 'string') {
    console.error('El identificador debe ser una cadena de texto.');
    return;
  }

  const fechaExpiracion = new Date();
  fechaExpiracion.setTime(fechaExpiracion.getTime() - 1);
  document.cookie = `${(identificador)}=; expires=${fechaExpiracion.toUTCString()}`;
}
