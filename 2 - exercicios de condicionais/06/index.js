const alturaEmCm = 150;

if (alturaEmCm >= 180 && alturaEmCm <= 185) {
    console.log("Você foi convocado para a posição, LIBERO")
}
else if (alturaEmCm >= 186 && alturaEmCm <= 195) {
    console.log("Você foi convocado para a posição, PONTEIRO")
}
else if (alturaEmCm >= 196 && alturaEmCm <= 205) {
    console.log("Você foi convocado para a posição, OPOSTO")
}
else if (alturaEmCm > 250) {
    console.log("Você foi convocado para a posição, CENTRAL")
}
else { console.log("Infelizmente você foi REPROVADO") }