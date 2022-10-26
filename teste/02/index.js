const letras = ["A", "e", "B", "C", "E", "z"];

let letraE = 0

for (let cadaLetra of letras) {
    if (cadaLetra === "e" || cadaLetra === "E") {
        letraE++
    }
}

if (letraE === 0) {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`)
} else {
    console.log(`Foram encontradas ${letraE} letras "E" ou "e".`)
}
