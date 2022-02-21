var sec = document.getElementById('section')

function enviar(){
    document.body.style.background = '#36342e'
    sec.style.background = '#5a5151'
}
function envi(){
    document.body.style.background = '#ffffff'
    sec.style.background = '#8c70f3'
}

function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0) {
        window.alert('[ERRO] Digite um número para prosseguir!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ``
        for(let c = 1;c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
} 