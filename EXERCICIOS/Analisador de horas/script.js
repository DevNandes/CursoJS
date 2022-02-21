function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    if (hora >= 0 && hora < 12) {
        // BOM DIAA
        msg.innerHTML = `Agora são ${hora} horas da manhã`
        img.src = 'fotomanha.png'
        document.body.style.background = '#fa9d40'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        msg.innerHTML = `Agora são ${hora} horas da tarde`
        img.src = 'fototarde.png'
        document.body.style.background = '#394769'
    } else {
        //Boa noite
        msg.innerHTML = `Agora são ${hora} horas da noite`
        img.src = 'fotonoite.png'
        document.body.style.background = '#311e1e'
    }

}