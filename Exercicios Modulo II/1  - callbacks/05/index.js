

let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
let tempoSonecaEmSegundos = 10;
let numeroDeSonecas = 2;
let tempoDespertar = tempoParaAlarmarEmSegundos * 1000;
let tempoSoneca = tempoSonecaEmSegundos * 1000;
let contagem = 0;


const inicio = (callback) => {
    console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos!`);
    setTimeout(() => {
        const id = setInterval(() => {
            contagem++
            console.log("Beep beep!");
            if (contagem === tempoAlarmandoEmSegundos && numeroDeSonecas > 0) {
                clearInterval(id)
                callback(inicio)

            } else if (contagem === tempoAlarmandoEmSegundos && numeroDeSonecas === 0) {
                clearInterval(id)
            }
        }, 1000);
    }, tempoDespertar);

    // intervalo(soneca)

}


const soneca = () => {
    contagem = 0;
    numeroDeSonecas--;
    console.log(`Soneca ativada, próximo alarme em ${tempoSonecaEmSegundos} segundos`);

    setTimeout(() => {
        const id = setInterval(() => {
            contagem++
            console.log("Beep beep!");
            if (contagem === tempoAlarmandoEmSegundos && numeroDeSonecas > 0) {
                clearInterval(id)
                soneca()

            } else if (contagem === tempoAlarmandoEmSegundos && numeroDeSonecas === 0) {
                clearInterval(id);
                console.log("Fim do Timer")
            }

        }, 1000);
    }, tempoSoneca);

}
inicio(soneca)
