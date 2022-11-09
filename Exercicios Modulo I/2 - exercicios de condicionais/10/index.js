const caractere = "p";

if (/[AEIOU]/gm.test(caractere)) {
    console.log("Esse caractere é da categotia: Vogal MAIÚSCULA")
}
else if (/[aeiou]/gm.test(caractere)) {
    console.log("Esse caractere é da categotia: Vogal minuscula")
}
else if (/[0-9]/gm.test(caractere)) {
    console.log("Esse caractere é da categotia: Numero")
}
else {
    console.log("Qualquer letra que não seja uma vogal")
}