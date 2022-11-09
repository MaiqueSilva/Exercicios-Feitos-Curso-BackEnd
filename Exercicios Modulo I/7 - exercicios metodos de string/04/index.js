let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";


const separar = nome.split(" ");

let novoFormato = "";

for (let item of separar) {
    let primeiraLetra = item.slice(0, 1);
    let restanteDoNome = item.slice(1);

    novoFormato += primeiraLetra.toUpperCase() + restanteDoNome + " ";
}

identificador = identificador.padStart(6, "0");
nome = novoFormato;
email = email.trim()


console.log(nome);
console.log(identificador);
console.log(email);

