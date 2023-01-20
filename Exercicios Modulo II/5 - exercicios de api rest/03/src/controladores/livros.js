const livros = require("../dados/livros");
let id = 3;

const obterLivros = (req, res) => {
    return res.json(livros);
};

const selecionarLivro = (req, res) => {
    const id = Number(req.params.id);


    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    };

    const livro = livros.find(livro => livro.id === id);

    console.log(livro, id)

    if (!livro) {
        return res.status(404).json({ mensagem: "Não existe livro para o ID informado." })
    }

    return res.json(livro)
};

const cadastrarLivros = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;
    ;

    if (!titulo) {
        return res.status(400).json({ mensagem: "O campo titulo é obrigatorio" })
    };
    if (!autor) {
        return res.status(400).json({ mensagem: "O campo autor é obrigatorio" })
    };

    if (!ano) {
        return res.status(400).json({ mensagem: "O campo ano é obrigatorio" })
    };

    if (!numPaginas) {
        return res.status(400).json({ mensagem: "O campo numPaginas é obrigatorio" })
    };

    const novoLivro = {
        id: id,
        titulo,
        autor,
        ano,
        numPaginas
    }
    livros.push(novoLivro);
    id++

    return res.status(201).json();
};

const alterarLivros = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;
    ;

    if (!titulo) {
        return res.status(400).json({ mensagem: "O campo titulo é obrigatorio" })
    };
    if (!autor) {
        return res.status(400).json({ mensagem: "O campo autor é obrigatorio" })
    };

    if (!ano) {
        return res.status(400).json({ mensagem: "O campo ano é obrigatorio" })
    };

    if (!numPaginas) {
        return res.status(400).json({ mensagem: "O campo numPaginas é obrigatorio" })
    };

    const livroExistente = livros.find(livro => livro.id === Number(req.params.id));


    if (!livroExistente) {
        return res.status(404).json({ mensagem: "Não existe livro para o ID informado." })
    }
    livroExistente.titulo = titulo;
    livroExistente.autor = autor;
    livroExistente.ano = ano;
    livroExistente.numPaginas = numPaginas;

    return res.json({ mensagem: "livro substituido" })
}

const alterarParteLivros = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;
    const livroExistente = livros.find(livro => livro.id === Number(req.params.id));


    if (!livroExistente) {
        return res.status(404).json({ mensagem: "Não existe livro para o ID informado." })
    }

    if (titulo) {
        livroExistente.titulo = titulo
    };

    if (autor) {
        livroExistente.autor = autor
    };

    if (ano) {
        livroExistente.ano = ano
    };

    if (numPaginas) {
        livroExistente.numPaginas = numPaginas
    }
    return res.json({ mensagem: "livro substituido" })
};

const excluirLivros = (req, res) => {
    const indice = livros.findIndex(livro => livro.id === Number(req.params.id));


    if (indice < 0) {
        return res.status(404).json({ mensagem: "Não existe livro para o ID informado." })
    }

    livros.splice(indice, 1);

    return res.json({ mensagem: "livro removido" })
};


module.exports = {
    obterLivros,
    selecionarLivro,
    cadastrarLivros,
    alterarLivros,
    alterarParteLivros,
    excluirLivros
}
