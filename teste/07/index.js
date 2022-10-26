const nomes = ["Ana", "Joana", "Carlos", "amanda", "Arnaldo", "Arberlado", "andre"];

let nomesComA = []

for (let letra of nomes) {
    if (letra.substring(0, 1) === "a" || letra.substring(0, 1) === "A") {
        nomesComA.push(letra);
    }
}

console.log(nomesComA)

//correção / outra forma de fazer

const nomesComecadosComA = [];
for (let nome of nomes) {
    const inicial = nome[0];

    if (inicial === "A" || inicial === "a") {
        nomesComecadosComA.push(nome);
    }
}

console.log(nomesComecadosComA)