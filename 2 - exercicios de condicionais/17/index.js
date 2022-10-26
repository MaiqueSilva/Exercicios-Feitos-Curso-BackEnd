//valor do produto comprado.
const valorDoProduto = 1200;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 500;

//quantidade de parcelas pagas
const parcelasPagas = 5

const parcelasRestante = quantidadeDoParcelamento - parcelasPagas

const valordaParcela = (valorDoProduto / quantidadeDoParcelamento).toFixed(2)

console.log(`Restam ${parcelasRestante} parcelas de R$ ${valordaParcela}`)