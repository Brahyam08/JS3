let num= window.prompt('escribe tres digitos')

let num1=parseInt(num.substring(0,1))
let num1=parseInt(num.substring(1,2))
let num1=parseInt(num.substring(2))

if (num % 2 === 0 &&  num2 % 2 === 0 && num3 % 2 ===0){
    console.log('Todos son pares')

}else if (num % 2 !== 0 &&  num2 % 2 !== 0 && num3 % 2 !== 0){
console.log('todos son Impares')
}else {
    console.log('Los numeros estan mezclados enre pares e impares ')
}