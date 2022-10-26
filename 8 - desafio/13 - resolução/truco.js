// O jogo de truco é muito popular pelo Brasil. Numa de suas versões, ele é jogado apenas com as cartas Q J K A 2 3. Elas tem essa ordem de "força" nesse jogo, sendo 3 a mais valiosa e Q a menos valiosa. Contudo, a cada partida é virada uma carta com a face pra cima na mesa. Esta carta serve para indicar que a próxima carta é a manilha, ou seja, a carta mais poderosa para essa partida.

// Supondo que a carta virada pra cima dessa rodada seja um ás (A), a manilha será 2, isso significa que 2 é a carta mais forte dessa rodada.

// Faça um programa que diga qual é a manilha, dada uma carta virada para cima.

// Input Format

// A entrada é um string armazenado na variável cartaParaCima que indica qual carta ficou virada para cima. Será sempre uma das opções: Q, J, K, A, 2, 3.

// Constraints

// -

// Output Format

// Imprima na tela qual é a manilha desta partida. Sua resposta deve ser sempre uma das opções: Q, J, K, A, 2, 3.

// Sample Input 0

// Q
// Sample Output 0

// J

let manilha = ""

if (carta === "Q") {
    manilha = "J";
} else if (carta === "J") {
    manilha = "K"
} else if (carta === "K") {
    manilha = "A"
} else if (carta === "A") {
    manilha = "2"
} else if (carta === "2") {
    manilha = "3"
} else if (carta === "3") {
    manilha = "Q"
}

console.log(manilha)

//codigo antigo


// if (carta === "Q") {
//     console.log("J")
// } else if (carta === "J") {
//     console.log("k")
// } else if (carta === "k") {
//     console.log("A")
// } else if (carta === "A") {
//     console.log("2")
// } else if (carta === "2") {
//     console.log("3")
// } else if (carta === "3") {
//     console.log("Q")
// }