const meu_dinheiro = 8000;
const valor_tenis = 12999;

const porcentual = (meu_dinheiro * 100) / valor_tenis;

console.log(`O desconto é de ${porcentual.toFixed(1)}`);

// correção: eu estava tentando calcular o desconto, sendo que era so fazer valor do tenis menos o meu dinheiro.
// forma correta de fazer logo a baixo


const desconto = valor_tenis - meu_dinheiro;

const cupom = 100 * desconto / valor_tenis;

console.log(`O valor correto do cupom deve ser ${cupom.toFixed(2)}`)

