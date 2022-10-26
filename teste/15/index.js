const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for (let i of original) {
    let resto = (i % 2) === 0

    if (resto) {
        pares.push(i)
    } else {
        impares.push(i)
    }
}

console.log(pares)
console.log(impares)