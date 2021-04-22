let temp = parseInt(window.prompt('dime una temperatura:'));

if (temp >= 40) {
    console.log('vete a otro sitio.')

} else if (temp >= 30 && temp < 40) {
    console.log('enciende el aire acondicionado')
} else if (temp >= 20 && temp < 30) {
    console.log('no hagas nada')
} else if (temp >= 10 && temp < 20) {
    console.log('Encender calefaccion')
} else if (temp < 10) {
    console.log('vete a otro sitio')
}