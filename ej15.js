let  helados = parseInt(window.prompt('Elige la cantidad de helado'));
let totalhelados= helado*2;
if(helados >= 10){
    helados= helados++;
    console.log(helado);
    console.log(totalhelados);

}else{
    console.log(helados);
    console.log(totalhelados);
}



if(helado >= 10){
    console.log(`te llevas ${helados++} y te cuesta ${helados*2}`)

}else{
    console.log(`te llevas ${helados} y te cuesta ${helados*2}`)

}