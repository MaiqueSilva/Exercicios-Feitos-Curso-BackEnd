const numeros = [54, 22, 14, 87, 1, 10, 284];


console.log(numeros.indexOf(10))

//CORREÇÃO / Outra forma de fazer


let resposta = -1

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (numero === 10) {
        resposta = i;
        break;
    }

}

console.log(resposta)