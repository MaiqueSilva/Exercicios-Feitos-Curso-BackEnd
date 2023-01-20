const { buscarEndereco } = require("utils-playground");
const fs = require("fs/promises");



const buscarCep = async (req, res) => {
    try {
        const cep = req.params.cep;
        const endereco = await buscarEndereco(cep);
        if (endereco.erro) {
            return res.status(404).json("CEP invalido")
        }

        const lerArquivo = await fs.readFile("./src/enderecos.json");//leitura do arquivo

        const converteParaObjeto = JSON.parse(lerArquivo); //converter arquivo em objeto js;

        const enderecoEncontrado = converteParaObjeto.find((cadaItem) => {
            return cadaItem.logradouro === endereco.logradouro
        });
        console.log(endereco)
        if (enderecoEncontrado) {

            return res.status(200).json(enderecoEncontrado)
        }

        converteParaObjeto.push(endereco);

        await fs.writeFile("./src/enderecos.json", JSON.stringify(converteParaObjeto))//escrevendo no arquivo e convertendo em json

        return res.status(200).json({ mensagem: "endereço cadastrado", endereco })
    } catch (erro) {
        return res.status(404).json("CEP invalido")

    }
}

module.exports = { buscarCep }