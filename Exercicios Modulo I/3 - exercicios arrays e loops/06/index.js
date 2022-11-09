const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let numeroPar = []
let soma = 0

for (let i of numeros) {
    let resto = (i % 2) === 0

    if (resto) {
        numeroPar.push(i)
    }
}

for (let item of numeroPar) {
    soma = soma + item;
}

console.log(soma)


//correção/forma mais facil de fazer:

let somaDosPares = 0;
for (const item of numeros) {
    if (numero % 2 === 0) {
        somaDosPares += item
    }
}