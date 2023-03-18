function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente novamente')
    } else {
         var fsex = document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var genero = 'A'
         var img = document.createElement('img')
         img.setAttribute('id','foto')
         if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <= 10) {
                img.setAttribute('src','menino.png')
                //criança
            } else if (idade < 21){
                img.setAttribute('src','jovem-homem.png')
                // Jovem
            } else if (idade < 60){
                img.setAttribute('src','homem-adulto.png')
                //adulto
            } else {
                img.setAttribute('src','home-idoso.png')
                //idoso
            }
         } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <= 10) {
                img.setAttribute('src','menina.png')
                //criança
            } else if (idade < 21){
                img.setAttribute('src','jovem-mulher.png')
                // Jovem
            } else if (idade < 60){
                img.setAttribute('src','mulher-adulta.png')
                //adulto
            } else {
                img.setAttribute('src','idosa.png')
                //idoso
            }
         }
         res.style.textAlign = 'center'
         res.innerHTML =  `Detectamos ${genero} com ${idade} anos`
         res.appendChild(img)
    }
    
    

}
