const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const maiorValor = numeros.reduce((a, b) => {
    let numero = a;
    if (b > numero) {
        numero = b;
    }
    return numero
})

console.log(maiorValor)