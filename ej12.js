let posicion = parseInt(window.prompt('tu posicion'));

if(posicion === 1){
    console.log('has ganado a')
}else if (posicion !== 1){ 
    console.log('lo importante es participar A')
}
if (posicion === 1){
    console.log('medalla de oro b ')
}else if (posicion === 2){
    console.log('medalla de plata b ')
}else if (posicion===3){
    console.log('medalla de bronce b')
}else{
    console.log('Lo importante es participar B')
}
switch(posicion) {
case 1:
    console.log('Medalla de oro switch')
    break;
case 2:
    console.log('medalla de plata switch')
    break;
case 3:
    console.log('medalla de bronce switch')
    break;
default:
    console.log('Lo importante es participar switch')
    break;
}
if (posicion === 1 ||posicion === 2||posicion === 3 ){
    console.log('Sube al podium')
}else{
    console.log('se acabo la carrera')
}
