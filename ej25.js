let frase = window.prompt('Dile algo a Bob')

if (
    frase.substring(frase.length -2)=== '!?'|| frase.substring(frase.length -2) ==='?!'
){
    window.alert('Eh! Tranquilizate. Yo se lo que hago')
}else if(frase.substring(frase.length -1)=== '?'){
    window.alert('claro!')
}else if(frase.substring(frase.length -1)=== '!'){
window.alert('Eh tranquilizate!')
}else if(frase.length === 0){
    window.alert('Con que esas tenemos ....')
}else{
    window.alert('sin más...')
}