const usuarios = [
    {
        nome: "João",
        pets: [],
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

// let soma = 0

// for (let i = 0; i < usuarios.length; i++) {
//     const { nome } = usuarios[i];
//     const { pets } = usuarios[i];
//     if (pets.length === 1) {

//         console.log(`Sou ${nome} e tenho ${pets.length} pet`)
//     } else if (pets.length > 1) {
//         console.log(`Sou ${nome} e tenho ${pets.length} pets`)
//     } else {
//         console.log(`Sou ${nome} e não pet`)
//     }
// }


//---------------SEGUNDA FORMA DE FAZER-----------------

for (const usuario of usuarios) {
    const { pets, nome } = usuario;
    if (pets.length > 1) {
        if (pets.length > 1) {
            console.log(`sou ${nome} e tenho ${pets.length} pets`);
        } else {
            console.log(`sou ${nome} e tenho ${pets.length} pet`);
        }
    } else {
        console.log(`sou ${nome} e não temho pets`);
    }
}