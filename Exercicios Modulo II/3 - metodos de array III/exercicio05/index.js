const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

let maiorString = cidades.reduce((contador, elementoAtual) => {
    let cidade = contador;
    if (elementoAtual.length > cidade.length) {
        cidade = elementoAtual;
    };
    return cidade;
})

console.log(maiorString)
