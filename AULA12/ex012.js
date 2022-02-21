var agora = new Date()
var hora = agora.getHours()
console.log (`Agora são exatamente ${hora} horas.`)
if(hora >= 6 && hora <= 12) {
    console.log ('Bom dia!')
} else if(hora <= 17 && hora >= 13) {
    console.log('Boa tarde!')
} else if (hora <= 23 && hora >= 18){
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}