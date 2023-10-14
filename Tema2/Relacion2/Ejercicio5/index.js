a = prompt ("Introduce el valor de a")
a = parseInt(a)

b = prompt ("Introduce el valor de b")
b = parseInt(b)

c = prompt ("Introduce el valor de c")
c = parseInt(c)

x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);

document.write("La solución de la ecuación "+a+"x<sup>2</sup> + "+b+"x + "+c+"=0 es igual a: "+x1+" y "+x2)