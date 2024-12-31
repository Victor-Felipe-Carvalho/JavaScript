function parimp(n) {
    if (n % 2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}
let resParImpar = parimp(14)
console.log(resParImpar)

function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(20))

let v = function(x) {
    return x*2
}
console.log(v(1))
