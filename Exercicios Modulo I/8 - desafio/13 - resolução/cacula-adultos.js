// Um determinado evento é permitido apenas para maiores de idade. Através de um lista com as idades dos potenciais participantes, seu objetivo é fazer um programa que determine qual a idade da pessoa mais nova, dentre os que podem participar (maiores de idade).

// Input Format

// A entrada é um array com as idades das pessoas que tentam participar.

// Constraints

// A lista contém de 1 a 1000 itens

// Output Format

// Imprima na tela a idade da pessoa mais jovem que pode participar. Se ninguém puder participar, imprima na tela a mensagem CRESCA E APARECA.


const idades = [12, 11, 2, 21, 85, 44, 35, 18];
const podemParticipar = [];
let maiorDeIdade = 0

for (item of idades) {
    if (item >= 18) {
        maiorDeIdade++;
        podemParticipar.push(item);
    }
}

if (maiorDeIdade >= 1) {
    console.log(Math.min(...podemParticipar))
} else if (maiorDeIdade === 0) {
    console.log("CRESCA E APARECA")
}


// CODIGO ANTIGO

// let maiorDeIdade = 0

// for (item of idades) {
//     if (item >= 18) {
//         maiorDeIdade++
//         console.log(item);
//         break;
//     }
// }

// if (maiorDeIdade === 0) {
//    console.log("CRESCA E APARECA")
// }

