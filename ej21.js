let nombre = window.prompt('Acceso comerciales Ingresa tu nombre');
let ventas = parseInt(window.prompt('¿Cuantas ventas se han realizado? '));

ventas > 500 ? console.log(nombre + `Estas han sido tus ventas` + ventas + `y te llevas una comision de ` + ventas * 0.05) : console.log(nombre + `Estas han sido tus ventas` + ventas);