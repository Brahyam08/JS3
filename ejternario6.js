let opcion = window.prompt(`Qué operación quieres realizar?
- suma
-resta
-multiplicacion
-division-resto
`).toLowerCase();

let num1 = parseInt(window.prompt('escribe un numero'))
let num2 = parseInt(window.prompt('escribe otro numero'))
switch (opcion) {
    case suma:
        document.getElementById('div').innerHTML = `<h3>El resultado de sumar <strong>${num1}</strong><strong>${num2}</strong> es: </h3>
        <h1>${num1 + num2}</h1>`;
        break
    case resta:
        document.getElementById('div').innerHTML = `<h3>El resultado de restar <strong>${num1}</strong><strong>${num2}</strong> es: </h3>
        <h1>${num1 - num2}</h1>`;
        break
    case multiplicacion:
        document.getElementById('div').innerHTML = `<h3>El resultado de multiplicar <strong>${num1}</strong><strong>${num2}</strong> es: </h3>
        <h1>${num1 * num2}</h1>`;
        break
    case division:
        document.getElementById('div').innerHTML = `<h3>El resultado de dividir <strong>${num1}</strong><strong>${num2}</strong> es: </h3>
        <h1>${num1 / num2}</h1>`;
        break
    case resto:
        document.getElementById('div').innerHTML = `<h3>El resultado del resto <strong>${num1}</strong><strong>${num2}</strong> es: </h3>
        <h1>${num1 % num2}</h1>`;
        break
    default:
        document.getElementById('div').innerHTML = `<h3>La operacion no es valida</h3>`
}
