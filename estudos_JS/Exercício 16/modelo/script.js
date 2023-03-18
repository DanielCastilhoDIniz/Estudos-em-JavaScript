function contar(){
    var inicio = document.getElementById('a1')
    var fim = document.getElementById('an')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    //var cont = ''
    if (fim.value.length == 0) {
        window.alert("[Erro] digite um valor válido para o Fim! ") // não deixa fim em branco
    } else if ( passo.value.length == 0){
        window.alert("[Erro] digite um valor para o Passo!") // não deixa passo em branco
    } else if (Number(fim.value) == 0 ){
        window.alert("[Erro] digite um valor para p fim") // digitar uma valor diferente de 0
    } else if ( inicio.value.length == 0){
        window.alert("[Erro] digite um valor para o Passo!") // não deixa inicio em branco
    } else if (Number(inicio.value) == 0 ){
        window.alert("[Erro] digite um valor para o Passo!") // digitar uma valor diferente de 0
    } else {
        res.innerHTML = `Contando: <br>`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo Inválido! considerando PASSO = 1')
            p = 1
        }

        if(i < f){
            //contagem crescente
            for(c = i; c <=f; c+= p ){
                res.innerHTML += `${c} \u{1F449}`
            }     
        }else{
            //contagem decrescente
            for(c = i; c >=f; c-= p ){
                res.innerHTML += `${c} \u{1F449} `
            } 
        }   
    }   
    res.innerHTML += `\u{1F3C1}`
}