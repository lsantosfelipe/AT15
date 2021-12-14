function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(Number(ini.value) == 0 || Number(fim.value) == 0){
        res.innerHTML = `[Campo vazio detectado] Preencha todos os campos e tente novamente!`
    }else{
        res.innerHTML = 'Contagem: <br> <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            alert('Passo Inválido! Considerando "Passo" = 1')
            p = 1
        } 
        if(i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{2192} `
            }
        }else{
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{2192} `
            }
        }
        res.innerHTML += `\u{1F51A}`
    }
}