const alunos = require(`../dados/alunos`);
let idAluno = 1;

const monstrarAlunos = (req, res) => {
    return res.json(alunos);
};

const detalharAluno = (req, res) => {

    const id = Number(req.params.id)

    const aluno = alunos.find((aluno) => {
        return aluno.id === id;
    });

    if (!aluno) {
        return res.status(400).json({ mensagem: `Aluno não encontrado` });
    };

    return res.json(aluno);
}

const adicionarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: `Informe o nome` });
    };
    if (!sobrenome) {
        return res.status(400).json({ mensagem: `Informe o sobrenome` });
    };
    if (!curso) {
        return res.status(400).json({ mensagem: `Informe seu curso` });
    };
    if (!idade) {
        return res.status(400).json({ mensagem: `Informe sua idade` });
    };

    if (idade < 18) {
        return res.status(400).json({ mensagem: `O aluno deve ter no minimo 18 anos` });
    };

    const novoAluno = {
        id: idAluno,
        nome,
        sobrenome,
        idade,
        curso
    };

    alunos.push(novoAluno);

    idAluno++;

    return res.status(201).send();
};

const excluirAluno = (req, res) => {

    const id = Number(req.params.id)

    const indice = alunos.findIndex((aluno) => {
        return aluno.id === id;
    });

    if (indice < 0) {
        return res.status(400).json({ mensagem: `Aluno não encontrado` });
    };

    const alunoExcluido = alunos.splice(indice, 1)

    return res.json(alunoExcluido);

}

module.exports = {
    monstrarAlunos,
    detalharAluno,
    adicionarAluno,
    excluirAluno
}