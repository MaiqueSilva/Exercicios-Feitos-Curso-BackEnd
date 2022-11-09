const carros = [
    { nome: "corola", marca: "toyota", ano: "2020", cor: "prata" },
    { nome: "argo", marca: "fiat", ano: "2021", cor: "preto" },
    { nome: "ranger", marca: "ford", ano: "2021", cor: "prata" },
    { nome: "hilux", marca: "toyota", ano: "2018", cor: "branco" },
]


const ordenar = (array, item) => {

    array.sort((a, b) => {
        return a[item].localeCompare(b[item]);
    })

    console.log(carros)

}

ordenar(carros, "marca")