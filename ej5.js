let dia = window.prompt('Introduce un dia de la semana: ').toLowerCase();

if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
    console.log(`hoy es ${dia}`);
} else if (dia === "sabado" || dia === "domingo") {
    console.log(`Hoy es fin de semana`)

} else {
    console.log('Esa palabra no la entiendo')
}



switch (dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log(`hoy es ${dia}`);
        break;
    case "sabado":
    case "domingo":
        console.log('es Fin de semana no me molestes')
        break;
    default:
        console.log('no se leer ')
}