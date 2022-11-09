const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;


function divisaoDeGrupos(nomes, tamanhoDoGrupo) {

    if (tamanhoDoGrupo === 2) {
        let grupo1 = nomes.slice(0, tamanhoDoGrupo);
        let grupo2 = nomes.slice(grupo1.length, grupo1.length + tamanhoDoGrupo);
        let grupo3 = nomes.slice(grupo2.length + tamanhoDoGrupo);

        console.log(`Grupo 1: ${grupo1}`);
        console.log(`Grupo 2: ${grupo2}`);
        console.log(`Grupo 3: ${grupo3}`);
    } else if (tamanhoDoGrupo === 1) {
        console.log("Não existe grupo de uma pessoa")
    } else {
        let grupo1 = nomes.slice(0, tamanhoDoGrupo);
        let grupo2 = nomes.slice(grupo1.length);
        console.log(`Grupo 1: ${grupo1}`);
        console.log(`Grupo 2: ${grupo2}`);
    }
}

divisaoDeGrupos(nomes, tamanhoDoGrupo)