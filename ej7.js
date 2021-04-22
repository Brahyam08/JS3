let num1 = parseInt(window.prompt('dime un numero'));
let num2 = parseInt(window.prompt('dime otro numero'));

if(num2 == 0){
    console.log('no se puede dividir por cero');
}else{
    console.log(num1/num2)
}