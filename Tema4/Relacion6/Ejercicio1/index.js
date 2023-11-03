window.onload = () => {
    const content = document.getElementById("content");
    const logout = document.getElementById("logout");

    // Comprobar si ya existe una cookie con el nombre del usuario
    const username = getCookie("username");

    if (username) {
        // Si la cookie existe, mostrar el mensaje de bienvenida
        logout.style.display="block";
        content.innerHTML = "<p>Bienvenido, " + username + ".</p>";
    } else {
        // Si la cookie no existe, mostrar un formulario para ingresar el nombre
        logout.style.display="none";
        content.innerHTML = "<p>Por favor, ingrese su nombre:</p>";
        const input = document.createElement("input");
        input.type = "text";
        content.appendChild(input);
        const button = document.createElement("button");
        button.innerHTML = "Guardar";
        button.addEventListener("click", function () {
            const newUsername = input.value;
            setCookie("username", newUsername, 5); // Establecer la cookie que expira en 5 minutos
            content.innerHTML = "<p>Bienvenido, " + newUsername + ".</p>";
            logout.style.display="block";
        });
        content.appendChild(button);
    }

    // Manejar el evento de "Cerrar Sesión" para eliminar la cookie
    logout.addEventListener("click", function () {
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        content.innerHTML = "<p>Ha cerrado sesión.</p>";
    });
}

    // Función para establecer una cookie
    function setCookie(name, value, minutes) {
        const date = new Date();
        date.setTime(date.getTime() + (minutes * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    // Función para obtener el valor de una cookie por nombre
    function getCookie(name) {
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookies = decodedCookie.split(';');
        for (let cookie of cookies) {
            const parts = cookie.split('=');
            if (parts[0].trim() === name) {
                return parts[1];
            }
        }
        return null;
    }

    
