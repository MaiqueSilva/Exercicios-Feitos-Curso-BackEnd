const primeiroNome = "Mauro";
const sobrenome = "";
const apelido = "";

if (apelido) {
    console.log(apelido)
} else if (primeiroNome && sobrenome) {
    console.log(primeiroNome + " " + sobrenome)
} else if (!primeiroNome) {
    console.log("Por gentileza, preencher seu nome")
}
else { console.log(primeiroNome) }