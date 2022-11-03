//Crie uma função que receba uma função callback como argumento, que por sua vez, ao ser executada, receba o nome do usuário e opcionalmente a sua idade. Caso a idade seja informada, a função callback deve imprimir o nome e o ano de nascimento com base na idade informada, caso contrário, imprimir somente o nome.


const informarDadosUsuario = (callback) => {
    const nome = 'Maique';
    const idade = 29;
    callback(nome, idade);
}

const funcaoCallback = (nome, idade) => {
    console.log(`Olá, ${nome}!`);

    if (idade) {
        const anoAtual = new Date().getFullYear();
        console.log(`Você nasceu em ${anoAtual - idade}`);
    }
}

informarDadosUsuario(funcaoCallback);