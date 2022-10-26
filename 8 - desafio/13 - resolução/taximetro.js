// Você é o programador responsável por programar o "taxímetro" do novo aplicativo de mobilidade que a empresa onde você trabalha está lançando. Nessa tarefa, dada uma distância percorrida e um tempo de viagem, você tem que fazer um programa que calcula o preço da viagem. Sabe-se que o app deve cobrar, inicialmente, 50 centavos por minuto de viagem e mais 70 centavos por cada quilômtro de viagem realizado. Caso a viagem tenha mais de 10km, cada km adicional (acima de 10) fica mais barato, passando a custar apenas 50 centavos por km. Caso a viagem dure mais de 20min, cada min adicional (acima de 20) fica mais barato, passando a custar apenas 30 cetavos por minuto. Seu trabalho é fazer a parte do programa que calcula, em centavos, o valor a ser pago pelo cliente (quanta responsabilidade, hein?). Lembre-se de arredondar para baixo o valor final a ser pago.

// Input Format

// A entrada é composta por duas variáveis: - min representa quantos minutos de duração a viagem teve. É sempre um número inteiro. - km representa quantos quilômetros foram percorridos na viagem. Pode ser um número com casas decimais.

// Constraints

// -

// Output Format

// Imprima na tela um único inteiro que representa o valor que deve ser pago pelo cliente, em centavos.

// Sample Input 0

// 25 11.5
// Sample Output 0

// 1925

function solucao(min, km) {

    //50 centavos por minuto de viagem e mais 70 centavos por cada quilômtro
    let valorPorMinuto = min * 50;
    let valorPorQuilometros = km * 70;

    let valorFinal = 0;

    // Se for menos que 20 minutos e menos de 10 km
    if (min <= 20 && km <= 10) {
        valorFinal = valorPorMinuto + valorPorQuilometros;
        console.log(Math.floor(valorFinal));


        // Se for mais que 20 minutos e menos de 10 km
        // cada min adicional (acima de 20) fica mais barato, passando a custar apenas 30 cetavos por minuto.
    } else if (min > 20 && km <= 10) {
        valorPorMinuto = (min - 20) * 30;
        valorFinal = valorPorMinuto + (20 * 50) + valorPorQuilometros;
        console.log(Math.floor(valorFinal));

        // Se for menos que 20 minutos e mais de 10 km
        // cada km adicional (acima de 10) fica mais barato, passando a custar apenas 50 centavos por km
    } else if (min <= 20 && km > 10) {
        valorPorQuilometros = (km - 10) * 50;
        valorFinal = valorPorQuilometros + (10 * 70) + valorPorMinuto;
        console.log(Math.floor(valorFinal));

        // Se for mais que 20 minutos e mais de 10 km
    } else if (min > 20 && km > 10) {

        valorPorMinuto = (min - 20) * 30;
        valorPorQuilometros = (km - 10) * 50;
        valorFinal = valorPorMinuto + (20 * 50) + valorPorQuilometros + (10 * 70);
        console.log(Math.floor(valorFinal))
    }

}

solucao(25, 11.5)