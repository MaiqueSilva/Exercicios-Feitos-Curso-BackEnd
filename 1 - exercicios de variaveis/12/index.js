let montante = 90000
let capitalInicial = 60000
let numMeses = 24



let taxaJuros = montante / capitalInicial;
let soma = Math.pow(taxaJuros, 1 / numMeses) - 1;
// let i = soma * 100 Não esta errado, mas da para fazer esse calculo direto no console.log

//De acordo com a correção o exercicio esta correto!

//Forma 2 de fazer: 
// let taxaJuros = (montante / capitalInicial)**(1/numMeses) -1;


console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${soma * 100}%, pois após ${numMeses} meses você teve que pagar ${montante} reais.`)