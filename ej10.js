let num1 = parseInt(window.prompt('dime un numero'));
let num2 = parseInt(window.prompt('dime otro numero'));

if (num1 == num2) {
    console.log('los valores son iguales tienes un 0')
}else if (num1 % 6 == num2 % 6) {
    console.log(`el numero ${num1} en mas pequeño que ${num2}`)
} else if (num2 % 6 != num1 % 6) {
    console.log(`el numero ${num2} en mas grande que ${num1}`)
}
