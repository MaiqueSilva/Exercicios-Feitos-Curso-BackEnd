const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];

let indice = 0;
const tempoRodada = 20;
const contagem = (tempoRodada / jogadores.length) * 1000

const tempo = () => {

    if (indice < jogadores.length) {
        console.log(jogadores[indice]);
    }
    else if (indice === jogadores.length) {
        console.log("A rodada terminou!")
        clearInterval(id)
    }
    indice++
}

const id = setInterval(tempo, contagem);

