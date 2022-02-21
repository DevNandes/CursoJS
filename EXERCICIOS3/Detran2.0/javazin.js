function verificar() {
    var nome = document.querySelector("#nome")
    var nom1 = nome.value
    var mots = document.getElementById('mots')
    var motn = document.getElementById('motn')
    var res = document.getElementById('txt6')
    var vel = document.getElementById('vel1')
    var vel = Number(vel.value)
    if(mots.checked){
        if(vel <= 60){
            res.innerHTML = `Parabéns ${nom1}, sua velocidade foi de ${vel}Km/h você está dirigindo corretamente, e pode seguir sua viagem`
        } else {
            res.innerHTML = `Olá ${nom1}, sua velocidade foi de ${vel}Km/h você está dirigindo fora da velocidade permitida, e você foi MULTADO!`
        } 
    } 
    if(motn.checked) {
        if(vel > 60) {
            res.innerHTML = `Olá ${nom1}, sua velocidade foi de ${vel}Km/h você está dirigindo fora da velocidade permitida e está sem carteira de motorista, então você foi MULTADO!`
        } else {
            res.innerHTML =  `Olá ${nom1}, sua velocidade foi de ${vel}Km/h você está dirigindo sem carteira de motorista, e você foi MULTADO!`
        }
        
    }
}  