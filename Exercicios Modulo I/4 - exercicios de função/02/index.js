const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (carro.ligado) {
            console.log("Este carro já está ligado.")
        } else {
            carro.ligado = true;
            verificarEstadoDoCarro(carro)
        }
    },
    desligar: function () {
        if (carro.ligado === false) {
            console.log("Este carro já está desligado.")
        } else {
            carro.ligado = false;
            carro.velocidade = 0;
            verificarEstadoDoCarro(carro)
        }
    },
    acelerar: function () {
        if (carro.ligado === false) {
            console.log("Não é possível acelerar um carro desligado.")
        } else {
            carro.velocidade += 10;
            verificarEstadoDoCarro(carro)
        }
    },
    desacelerar: function () {
        if (carro.ligado === false) {
            console.log("Não é possível desacelerar um carro desligado.")
        } else {
            carro.velocidade -= 10;
            verificarEstadoDoCarro(carro)
        }
    },
}

function verificarEstadoDoCarro(Marcha) {
    const verificarCarro = carro.ligado ? "ligado" : "desligado"


    console.log(`Carro ${verificarCarro}. Velocidade: ${carro.velocidade}`)
}


carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();

