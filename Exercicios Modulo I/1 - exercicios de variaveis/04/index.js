let capital = 1000;
let i = 0.125;
let t = 5;

let m = capital * (1 + i) ** t;

////De acordo com a correção o exercicio esta correto!

//segunda forma de fazer
// let m = capital * Math.pow((1 + i), t);

console.log(`Se um capital de R$ ${capital} é aplicado durante ${t} meses no sistema de juros compostos sob uma taxa mensal fixa de 12,5%, o montante sera de ${m.toFixed(0)}`)