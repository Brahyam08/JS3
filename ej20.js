let temp1 = parseInt(window.prompt('dime una temperatura'));
let typetemp = window.prompt('dime si quieres C o F').toUpperCase();

if (valor === "F"){
    console.log(`Tu temperatura en Fahrenheit es ${(Temperatura * 9)/ 5 + 32}`);
}else if(valor === "C"){
    console.log(`Tu temperatura en Fahrenheit es ${(Temperatura - 32) * 5 / 9 }`);
}
