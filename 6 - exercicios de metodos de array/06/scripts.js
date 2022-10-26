const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

function animal(nomeAnimal) {

    let achou = false

    for (let item of usuarios) {

        if (item.pets.includes(nomeAnimal)) {
            console.log(`O dono(a) do(a) ${nomeAnimal} é o(a) ${item.nome}`);
            achou = true
        }
    }
    if (!achou) {
        console.log(`Que pena ${nomeAnimal}, não encontramos seu dono(a)`)
    }
}

animal("Tony")
