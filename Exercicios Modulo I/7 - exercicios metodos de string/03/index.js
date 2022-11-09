let texto = "Aprenda programar do zero na Cubos Academy";

let textoURL = ""

for (let item of texto) {
    if (item === " ") {
        textoURL += item.replace(" ", "-");
    } else {
        textoURL += item
    }
}

console.log(textoURL.toLocaleLowerCase())