//O cofre ignora letras erradas durante a digitação da senha, desde que todas as letras da senha tenham sido digitadas na ordem correta.

//Por exemplo, se a senha for “cubos” e for digitado “cuggbyos”, o cofre irá abrir.

//A entrada consistirá em duas linhas, na primeira linha estará a senha correta, de até S caracteres. Na segunda linha estará a palavra digitada pela pessoa, de até N caracteres.

function senha(input) {

    let separarEntrada = input.split("\n");

    let senha = separarEntrada[0];
    let senhaDigitada = separarEntrada[1];
    let senhaCerta = ""

    console.log(separarEntrada)



    for (let i = 0; i < senhaDigitada.length; i++) {

        let indice = senha.indexOf(senhaDigitada[i]);

        if (indice === 0) {
            senhaCerta += senha[indice];
            senha = senha.slice(1);
        }
    }
    if (senhaCerta === separarEntrada[0]) {
        console.log("SIM")
    } else {
        console.log("NAO")
    }

}
senha("cubos ",
    "ewvelrabsocaeln")


// function senha(input) {


//     let senha = input[0];
//     let senhaDigitada = input[1];
//     let senhaCerta = ""


//     for (let i = 0; i < senhaDigitada.length; i++) {

//         let indice = senha.indexOf(senhaDigitada[i]);

//         if (indice === 0) {
//             senhaCerta += senha[indice];
//             senha = senha.slice(1);
//         }


//     }
//     if (senhaCerta === input[0]) {
//         console.log("SIM")
//     } else {
//         console.log("NAO")
//     }

// }
// senha(["cubos", "ewvelrabsocaeln"])