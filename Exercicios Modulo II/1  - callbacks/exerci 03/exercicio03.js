const professores = [
    {
        nome: 'Guido',
        stack: 'Back'
    },
    {
        nome: 'Vidal',
        stack: 'Back'
    },
    {
        nome: 'Dani',
        stack: 'Front'
    },
    {
        nome: 'Ruli',
        stack: 'Front'
    }
];

const buscador = (array, callback) => {
    const lista = [];
    let indice = 0;

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            lista[indice] = array[i];
            indice++;
        }
    }

    return lista;
}

const resultado = buscador(professores, (item) => {
    return item.stack === 'Back';
});

console.log(resultado);