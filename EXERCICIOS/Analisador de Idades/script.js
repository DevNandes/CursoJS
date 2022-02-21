function enviar(){
    var sexm = document.getElementById('sexm')
    var sexf = document.getElementById('sexf')
    var data = new Date()
    var data = data.getFullYear()
    var data = parseInt(data)
    var nas = document.getElementById('nas')
    var nas = Number(nas.value)
    var idade = data - nas
    var res = document.getElementById('res')
    var img = document.getElementById('img')
    res.innerHTML = `Sua idade é de ${idade} anos!`
    if(sexm.checked && sexf.checked) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else if(sexm.checked) {
        res.innerHTML = `Detectamos um Homem com ${idade} anos!`
        document.body.style.background = '#a490ff'
        if(idade >= 0 && idade < 10) {
            //criança
            img.src = 'criancam.png'

        } else if(idade < 18) {
            //jovem
            img.src = 'adolescentem.png'

        } else if(idade < 50) {
            //adulto
            img.src = 'macho.png'

        } else if(idade < 120) {
            //idoso
            img.src = 'veio1.png'

        } else if(idade > 120) {
            //alien
            img.src = 'alien.png'
            res.innerHTML += ' E provavelmente você já foi jogar no Vasco!'
            document.body.style.background = '#44ff5d'
        }
    } else if(sexf.checked){
        res.innerHTML = `Detectamos uma Mulher com ${idade} anos!`
        document.body.style.background = '#ff6ee7'
        if(idade >= 0 && idade < 10) {
            //criança
            img.src = 'criancaf.png'

        } else if(idade < 18) {
            //jovem
            img.src = 'adolescentef.png'

        } else if(idade < 50) {
            //adulto
            img.src = 'mulher.png'

        } else if(idade < 120) {
            //idoso
            img.src = 'veia1.png'

        } else if(idade > 120) {
            //alien
            img.src = 'alien.png'
            res.innerHTML += ' E provavelmente você já foi jogar no vasco!!'
            document.body.style.background = '#44ff5d'
        }
    } else {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    
}