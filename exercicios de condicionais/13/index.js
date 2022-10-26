//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let desconto

if (tipoDePagamento === "credito") {
    desconto = 0.05
} else if (tipoDePagamento === "cheque") {
    desconto = 0.03
} else if (tipoDePagamento === "debito" || "dinheiro") {
    desconto = 0.10
}
const valorFinal = valorDoProduto - (valorDoProduto * desconto).toFixed(2)

console.log(`Valor a ser pago: R$ ${valorFinal}`)

//Forma 2 de fazer

// if (tipoDePagamento === "credito") {
//     desconto = valorDoProduto * (5 / 100)
// } else if (tipoDePagamento === "cheque") {
//     desconto = valorDoProduto * (3 / 100)
// } else if (tipoDePagamento === "debito" || "dinheiro") {
//     desconto = valorDoProduto * (10 / 100)
// }

// const valorFinal = valorDoProduto - desconto

// console.log(desconto)
// console.log(valorFinal)