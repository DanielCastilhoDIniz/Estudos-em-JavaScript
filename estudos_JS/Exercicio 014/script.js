function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem1')
    var data = new Date()
    var hora = data.getHours ()
    //var hora = 6
    msg.innerHTML= `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        img.src ='amanhecer.png'
        document.body.style.backgroundColor ='#feed96'
    } // bom dia
    else if (hora >= 12 && hora <= 18){
        img.src ='entardecer1.png'
        document.body.style.backgroundColor = '#fd7a01'

    } // boa tarde
    else {
        img.src ='anoitecer.png'
        document.body.style.backgroundColor ='#2b4569'

    } // boa noite
}
