const numeroCartao = '1111222233334444';


const ultimosNumeros = numeroCartao.slice(-4);
const primeiroNumeros = numeroCartao.slice(0, 4);
const numeroDoMeio = ultimosNumeros.padStart(12, "*******");

const numeroCartaoCensurado = primeiroNumeros + numeroDoMeio


console.log(numeroCartaoCensurado);