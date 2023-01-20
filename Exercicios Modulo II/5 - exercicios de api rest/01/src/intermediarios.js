const validarSenha = (req, res, next) => {

    const { senha } = req.query

    if (!senha) {
        return res.status(401).json({ mensagem: `por favor, insira a senha` });
    };
    if (senha !== "cubos123") {
        return res.status(401).json({ mensagem: `senha invalida` });
    };



    next();
};

module.exports = validarSenha