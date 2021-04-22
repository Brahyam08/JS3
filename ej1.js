let numero1 = parseInt(window.prompt('dime un numero'));
let numero2 = parseInt(window.prompt('dime otro numero'));
let mensaje;
console.log(numero1 + numero2)
console.log(numero1 - numero2)
console.log(numero1 * numero2)
console.log((numero1 + numero2) / 2)

if (numero1 < numero2) {
    console.log(`${numero1} es menor que ${numero2}`)

} else {
    console.log(`${numero2} es menor que ${numero1}`)
}
