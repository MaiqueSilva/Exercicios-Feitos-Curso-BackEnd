const idade = 25;
const possuiPatologia = false;
const altura = 120;
const ehEstudante = true;

if (idade <= 12 || idade >= 65 || possuiPatologia || altura <= 150) {
    console.log("Acesso Negado")
} else if (ehEstudante || idade >= 13 && idade < 18) {
    console.log("10 Reais")
}
else {
    console.log("20 Reais")
}