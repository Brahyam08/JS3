let num1 = parseInt(window.prompt('dime un numero'));
let num2 = parseInt(window.prompt('dime un otro numero'));
let num3 = parseInt(window.prompt('dime un numero mas '));

let valor = 20;

if (Math.abs(num1 - num2) === valor) {
    console.log(`Diferencia entre ${num1} y ${num2} es 20`)

}
if (Math.abs(num1 - num3) === valor) {
    console.log(`Diferencia entre ${num1} y ${num3} es 20`)

}
if (Math.abs(num2 - num3) === valor) {
    console.log(`Diferencia entre ${num2} y ${num3} es 20`)

}