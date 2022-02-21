var sec = document.getElementById('section')

function enviar(){
    document.body.style.background = '#36342e'
    sec.style.background = '#5a5151'
}
function envi(){
    document.body.style.background = '#8f5858'
    sec.style.background = '#ffffff'
}


let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
var valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            media = soma/tot

            if (valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastados.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>Somando todos os valores encontrados o resultado foi ${soma}.</p>`
        res.innerHTML += `<p>Calculando a média de todos os valores obtivemos o seguinte resultado ${media}.</p>`
    }
}