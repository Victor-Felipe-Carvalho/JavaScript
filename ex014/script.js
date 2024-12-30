function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')
    if (formAno.value.length == 0 || formAno.value > ano || formAno.value < ano - 120) {
        window.alert('[ERRO] verifique e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'img/bebeMas.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovemMas.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adultoMas.png')
            } else {
                img.setAttribute('src', 'img/idosoMas.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'img/bebeFem.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovemFem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adultoFem.png')
            } else {
                img.setAttribute('src', 'img/idosoFem.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `${genero} com ${idade} anos` 
        resultado.appendChild(img)      
    }
}