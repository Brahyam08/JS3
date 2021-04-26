let num1 = Math.floor(Math.ramdom() * 100);
let num2 = Math.floor(Math.ramdom() * 100);
let num2 = Math.floor(Math.ramdom() * 100);

if (num1 > num2 && num1 > num3){
    window.alert('el mayor numero es ' + num1);

}else if (num2 > num1 && num2 > num3){
    window.alert('el mayor numero es ' + num2);
}else if (num3 > num1 && num3 > num2){
    window.alert('el mayor numero es ' + num3);
}else {
    window.alert('Han salido dos numeros iguales')
}