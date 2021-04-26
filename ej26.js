let usuario = window.prompt('elije Piedra, papel o tijera').toLowerCase()
let random = Math.floor(Math.random()*(4-1))+1;
let ordenador;

if(random ===1){
    ordenador='Piedra'
    console.log(ordenador)
}else if(random === 2){
    ordenador='Papel'
    console.log(ordenador)
}else {
    ordenador='Tijera'
    console.log(ordenador)
}

if (usuario === "piedra" && ordenador === 'tijera'){
    console.log(`tu: ${usuario} ordenador: ${ordenador} !Ganas tu!`)

}else if (usuario === "papel" && ordenador === 'piedra'){
    console.log(`tu: ${usuario} ordenador: ${ordenador} !Ganas tu!`)
}else if (usuario === "tijera" && ordenador === 'papel'){
    console.log(`tu: ${usuario} ordenador: ${ordenador} !Ganas tu!`)
}else if (usuario === ordenador){
    console.log(`tu: ${usuario} ordenador: ${ordenador} !Empate!`)
}else {
    console.log(`Tu ${usuario} Ordenador ${ordenador} !El ordenador gana!`)
}