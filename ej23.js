let year = parseInt(window.prompt('Dime un año'))

if (year % 100 === 0 && year % 400 === 0) {
    console.log('Es un año bisiesto')
} else if (year % 100 === 0 && year % 400 !== 0) {
    console.log('No es un año bisiesto')
}