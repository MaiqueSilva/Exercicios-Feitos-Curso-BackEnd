const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 2955870; //emCentavos

if (aposentada || portadoraDeDoenca) {
    console.log("isenta")
}
else if (totalDeRendimentos >= 28_559_70) {
    console.log("PEGA LEÃO")
}
else {
    console.log("VAZA LEÃO! JA TA DIFICL SEM VOCE")
}