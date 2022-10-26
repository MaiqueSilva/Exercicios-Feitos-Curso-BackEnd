const original = [1, 4, 12, 21, 53, 88, 112];

let numeroPar = []

for (let i of original) {
    let divisao = i % 2
    let resultado = divisao % 2 == 0;

    if (resultado) {
        numeroPar.push(i)
    }
}

console.log(numeroPar)


//correção / forma mais facil de fazer

let pares = [];
for (let item of original) {
    const restoDaDivisaoPor2 = item % 2;
    if (restoDaDivisaoPor2 === 0) {
        pares.push(item)
    }
}

console.log(pares)