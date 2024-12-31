let num = [5, 3, 2, 5, 2, 6]
num.push(7)
console.log(`Existem ${num.length} valores no array`)
console.log(`Os valores por ordem crescente dentro do array sao: ${num.sort()}`)
console.log(`O valor na segunda posicao eh ${num[1]}`)

for (pos=0; pos < num.length; pos++) {
    console.log(`A posicao ${pos} contem o valor ${num[pos]}`)
}
console.log(num.indexOf(7)) // Retorna o indice onde o valor foi encontrado
