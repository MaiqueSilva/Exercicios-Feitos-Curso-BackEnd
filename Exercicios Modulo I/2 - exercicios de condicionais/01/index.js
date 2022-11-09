const jogada1 = "tesoura"
const jogada2 = "papel"

if (jogada1 === "pedra" && jogada2 === "tesoura" || jogada1 === "papel" && jogada2 === "pedra" || jogada1 === "tesoura" && jogada2 === "papel") {
    console.log(` Jogador 1 usou ${jogada1} que ganha do jogador 2 que usou ${jogada2}, PARABENS`)
}
else if (jogada1 === jogada2) {
    console.log(`${jogada1} com ${jogada2} da empate, tente novamente`)
}
else { console.log(`Jogador 1 PERDEU, pois o jogador 2 usou ${jogada2} que ganha de ${jogada1}, PARABENS`) }