let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
let conta = tempoParaAlarmarEmSegundos * 1000
let contagem = 0;


const inicio = () => {
    console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos!`);
    setTimeout(intervalo, conta);

}

function intervalo() {

    const id = setInterval(() => {
        contagem++
        if (contagem === tempoAlarmandoEmSegundos) {

            clearInterval(id)


        }
        console.log("Beep beep!");

    }, 1000);


}
inicio()



