let num1 = parseInt(window.prompt('dime un numero'));
let num2 = parseInt(window.prompt('dime otro numero'));

if (parseInt((num1 % 100)/10) == parseInt((num2 % 100)/10)){
    console.log('el primer digito es comun entre ellos')
}else if((parseInt(num1 % 10)  == parseInt(num2 % 10))) {
    console.log('El ultimo numero es comun entre ellos ')
}
