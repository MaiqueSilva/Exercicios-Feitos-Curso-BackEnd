const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function gruposDeCarros(nomes, posicao) {

    let tresCarros = nomes.slice(posicao, posicao + 3);
    let resultado = tresCarros.join(" - ");

    console.log(resultado)
}

gruposDeCarros(nomes, posicao)