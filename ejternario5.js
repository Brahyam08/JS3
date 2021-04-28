let num1 = parseInt(window.prompt('escribe un numero'))
let num2 = parseInt(window.prompt('escribe otro numero'))

document.getElementById("div").innerHTML`
<p id="suma">Suma: ${num1 + num2}</p>
<p id="resta">Resta: ${num1 - num2}</p>
<p id="multi">Multiplicación: ${num1 * num2}</p>
<p id="divi">división: ${num1 / num2}</p>
<p id="resto">resto: ${num1 % num2}</p>
`

document.getElementById("suma").style.color = 'green'
document.getElementById("resta").style.color = 'red'
document.getElementById("divi").style.color = 'blue'
document.getElementById("multi").style.color = 'yellow'
document.getElementById("resto").style.color = 'black'

document.getElementById("suma").style.backgroundColor = 'red'
document.getElementById("resta").style.backgroundColor = 'blue'
document.getElementById("multi").style.backgroundColor = 'green'
document.getElementById("divi").style.backgroundColor = 'black'
document.getElementById("resto").style.backgroundColor = 'yellow'








