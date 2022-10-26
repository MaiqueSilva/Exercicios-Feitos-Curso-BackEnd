
const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

function organizacao() {
    frutas.reverse();
    let resultato = frutas.join();
    console.log(resultato);
}

function removerItem() {
    frutas.reverse();

    frutas.splice(frutas.length - 1, 1);
    frutas.splice(0, 1);
    frutas.splice(frutas.length, 0, "Melão");
    console.log(frutas);
}

organizacao(frutas)
removerItem(frutas)
