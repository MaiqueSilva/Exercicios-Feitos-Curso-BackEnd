const cpf = "011.022.033-44";

function tirarPontos(dados) {

    let cpfVerificado = ""

    for (let item of dados) {
        if (item === "." || item === "-") {

        } else {
            cpfVerificado += item
        }
    }

    return cpfVerificado
}

console.log(tirarPontos(cpf))