const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        contaBancaria.saldo += valor;
        contaBancaria.historicos.push({
            tipo: "Depósito",
            valor: valor / 100,
        })
        console.log(`Deposito de R$${valor / 100} realizado para o cliente: ${contaBancaria.nome}`)
    },
    sacar: function (valor) {
        if (valor > contaBancaria.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${contaBancaria.nome}`);
        } else {
            contaBancaria.saldo -= valor;
            contaBancaria.historicos.push({
                tipo: "Saque",
                valor: valor / 100,
            })
            console.log(`Saque de R$${valor / 100} realizado para o cliente: ${contaBancaria.nome}`)
        }
    },
    extrato: function () {
        console.log(`Extrato de Maria - Saldo: R$${contaBancaria.saldo / 100}`);
        console.log(contaBancaria.historicos);
    }
}


// contaBancaria.depositar(10000);
// contaBancaria.sacar(50000);
// contaBancaria.sacar(5000);
// contaBancaria.extrato();

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());


