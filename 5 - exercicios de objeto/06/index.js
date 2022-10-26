const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const jovens = []
const adultos = []


for (const item of usuarios) {


    item.idade < 18 ? jovens.push(item) : adultos.push(item); //Tenario

}

console.log(jovens)
console.log(adultos)