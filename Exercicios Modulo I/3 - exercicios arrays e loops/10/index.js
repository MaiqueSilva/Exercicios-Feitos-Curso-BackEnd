const numeros = [8, 11, 4, 1];

let menorNumero = numeros[0]
let maiorNumero = numeros[0]


for (let item of numeros) {
    if (item > maiorNumero) {
        maiorNumero = item
    }
}

for (let item of numeros) {
    if (item < menorNumero) {
        menorNumero = item
    }
}

const diferença = maiorNumero - menorNumero

console.log(diferença)
