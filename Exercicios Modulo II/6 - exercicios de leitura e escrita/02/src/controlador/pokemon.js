const { listarPokemons, detalharPokemon } = require("utils-playground");


const monstrarPokemon = async (req, res) => {
    const solicitacao = req.query.pagina
    const pokemon = await listarPokemons(Number(solicitacao))
    return res.json(pokemon.results);

};
const especificarPokemon = async (req, res) => {
    const solicitacao = req.params.id

    try {
        const pokemon = await detalharPokemon(solicitacao);

        const { id, name, height, weight, base_experience, forms, abilities, species } = pokemon
        return res.json({ id, name, height, weight, base_experience, forms, abilities, species });
    } catch (erro) {
        return res.status(404).json("Pokemon não existe ou não foi encontrado")
    }
};


module.exports = { monstrarPokemon, especificarPokemon }