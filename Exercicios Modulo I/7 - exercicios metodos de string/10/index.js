const nomeArquivo = 'Foto da Familia.pdf';

function validacao(arquivo) {

    const verificarponto = arquivo.lastIndexOf(".");
    if (
        arquivo.includes("jpg", verificarponto) ||
        arquivo.includes("jpeg", verificarponto) ||
        arquivo.includes("gif", verificarponto) ||
        arquivo.includes("png", verificarponto)
    ) {
        console.log("Arquivo válido")
    } else {
        console.log("Arquivo inválido")

    }
}

validacao(nomeArquivo)