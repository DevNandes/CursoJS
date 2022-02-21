function contar() {
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let pass = document.getElementById('pass')
    let res = document.getElementById('txt5')
    let add = document.getElementById('txta')
    
    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        window.alert('[ERRO] Está faltando informações, tente novamente')
    } else if(txta.checked) {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)

        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449} `
        }
        res.innerHTML += `\u{1F3C1}`
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)

        for(let c = i; c <= f; c ++){
            if(c % p == 0){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}