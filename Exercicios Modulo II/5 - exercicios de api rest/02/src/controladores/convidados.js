const convidados = require("../dados/convidados");


const listarConvidados = (req, res) => {
    const nome = req.query.nome

    if (!nome) {
        return res.json(convidados);
    }
    const convidado = convidados.find((convidado) => {

        return convidado === nome;
    });

    if (!convidado) {
        return res.status(404).json({ mensagem: "O convidado buscado não esta presente na lista" })
    }

    return res.json({ mensagem: "Convidado presente" });


};

const adicionarConvidado = (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: `Informe o nome` });
    };

    const convidado = convidados.find((convidado) => {

        return convidado === nome;
    });

    if (convidado) {
        return res.status(404).json({
            mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
        });
    };

    convidados.push(nome);

    return res.status(201).json({ mensagem: " Convidado Adicionado" });
};

const excluirConvidado = (req, res) => {
    const { nome } = req.params;

    const indice = convidados.findIndex((convidado) => {

        return convidado === nome;
    });

    if (indice < 0) {
        return res.status(404).json({ mensagem: "O convidado não esta presente na lista" })
    };

    convidados.splice(indice, 1);

    return res.json({ mensagem: " convidado removido" })

};

module.exports = { listarConvidados, adicionarConvidado, excluirConvidado }