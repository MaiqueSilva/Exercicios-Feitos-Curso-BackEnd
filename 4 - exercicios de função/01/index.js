const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "a"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}

function corrigirProva(prova) {
    let acertos = 0;
    let pontos = 0;

    for (let item of prova.questoes) {
        if (item.resposta === item.correta) {
            acertos++;
            pontos += 2;
        }
    }
    console.log(`O Aluno(a) ${prova.aluno} acertou ${acertos} e obteve nota ${pontos}`)

}

corrigirProva(prova)