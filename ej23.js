let edad = parseInt(window.prompt('que edad tienes'))

if (edad >= 18){
    let carnet = window.prompt('Tienes carnet de conducir?').toUpperCase()
if (carnet === 'SI') {
    let nombre = window.prompt('dime tu nombre').toUpperCase()
    let apellidos = window.prompt('Dime tus apellidos').toUpperCase()
    let ciudad = window.prompt('Dime tu ciudad').toUpperCase()
    let dias = parseInt(window.prompt('Cuantos dias quieres alquilar el vehiculo?'))
    let semanas = parseInt(dias / 7)
    console.log(`${nombre} ${apellidos} ${ciudad} ${dias} total = ${(dias % 7) * 25 + semanas * 125}€`);
} else {
    console.log('Lo sentimos sin carnet, no puedes alquilar un vehiculo')
}
}else {
    console.log('Lo sentimos no tienes edad para alquilar un vehiculo');
}