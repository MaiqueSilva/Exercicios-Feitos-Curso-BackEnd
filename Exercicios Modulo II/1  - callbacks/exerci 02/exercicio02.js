// Crie uma função para calcular o IMC (Índice de Massa Corporal).

// A função deve receber 3 argumentos: altura, peso e uma função callback. A função callback deve exibir, separadamente, o IMC e a faixa correspondente, seguindo a tabela abaixo.

// IMC abaixo de 18 = Desnutrição

// IMC entre 18 e 25 = Normal

// IMC acima de 25 = Sobrepeso

// Fórmula para calcular IMC: peso / (altura * altura)



const calcularIMC = (altura, peso, funcaoCallback) => {
    const imc = peso / (altura * altura);
    let faixa;

    if (imc < 18) {
        faixa = "Desnutrição"
    } else if (imc >= 18 && imc <= 25) {
        faixa = "Normal"
    } else {
        faixa = "Sobrepeso"
    }

    funcaoCallback(imc, faixa)
}

calcularIMC(1.87, 40, (imc, faixa) => {
    console.log(`IMC: ${imc}`);
    console.log(`Faixa Correspondente: ${faixa}`)
})