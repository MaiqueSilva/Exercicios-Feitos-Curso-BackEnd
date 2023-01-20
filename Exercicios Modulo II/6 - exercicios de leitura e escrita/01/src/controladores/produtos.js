const produtos = require("../bancodedados/produtos");
const { getStateFromZipcode } = require(`utils-playground`)

const mostrarProduto = (req, res) => {
    return res.send(produtos)
};

const detalharProduto = (req, res) => {
    const { idProduto } = req.params;

    const produto = produtos.find((produto) => {

        return produto.id === Number(idProduto)
    })
    if (!produto) {
        return res.status(404).json({ mensagem: "produto não localizado." })
    };

    return res.json(produto)

};

const calcularFrete = async (req, res) => {
    const { idProduto } = req.params;
    const { cep } = req.params;
    let valordoFrete = 0

    const produto = produtos.find((produto) => {

        return produto.id === Number(idProduto)
    })
    if (!produto) {
        return res.status(404).json({ mensagem: "produto não localizado." })
    };

    try {
        const estado1 = await getStateFromZipcode(cep).then((estado) => {
            return estado;
        })


        if (estado1 === "BA" || estado1 === "SE" || estado1 === "AL" || estado1 === "PE" || estado1 === "PB") {
            valordoFrete = produto.valor * 10 / 100;
        } else if (estado1 === "SP" || estado1 === "RJ") {
            valordoFrete = produto.valor * 15 / 100;
        } else {
            valordoFrete = produto.valor * 12 / 100;
        }


        return res.json({ produto, estado: estado1, frete: valordoFrete })

    } catch (erro) {
        console.log(erro.message)
        return res.status(400).json("CEP não encontrado ou invalido")
    }
}

module.exports = { mostrarProduto, detalharProduto, calcularFrete }