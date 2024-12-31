function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Confira os campos para que o programa possa ser executado')
        res.innerHTML = '' // Limpar o resultado em caso de erro
    } else {
        res.innerHTML = 'Contando: ' 
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p <= 0) {
            console.log('[ERRO] Passo Invalido. Considerando PASSO igual 1')
            p = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} ->` 
            }
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} ->` 
            }
        }
    }
}