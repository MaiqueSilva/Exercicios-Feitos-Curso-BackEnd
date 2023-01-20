const validarSenha = (req, res, next) => {
    const { senha } = req.query;

    if (!senha) {
        return res.send("a senha não foi informado");
    };

    if (senha !== "carros123") {
        return res.send("A senha esta incorreta");
    }
    next();
};


module.exports = { validarSenha }