//Todo bom editor de texto informa no rodapé do programa quantas palavras tem no texto. Você está trabalhando numa empresa que está desenvolvendo um editor de texto e ficou com a tarefa de desenvolver esta funcionalidade. Para o texto dado na entrada, imprima na tela quantas palavras existem neste texto.

// Input Format

// A entrada será sempre um texto qualquer

// Constraints

// A entrada será sempre um texto qualquer com no máximo 5000 caracteres.

// Output Format

// Imprima na tela a quantidade de palavras contidas no texto.

const texto = "               Cuidado, pois usuarios as vezes deixam      é           espacos vazios no fim do texto sem querer"


// Dividindo a RegEx e replace em partes:

// \s - qualquer espaço em branco
// {2,} - em quantidade de dois ou mais
// g - apanhar todas as ocorrências, não só a primeira


const limparEspaco = texto.replace(/\s{2,}/g, ' ').trim();
const contador = limparEspaco.split(" ");

let quantpalavras = [];

for (let item of contador) {
    if (item != "") {
        quantpalavras.push(item)
    }
}
console.log(quantpalavras.length)