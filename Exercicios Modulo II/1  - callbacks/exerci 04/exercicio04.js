

function mensagem() {
    console.log("finalizou")
}


function microondas(tempo) {
    console.log("iniciou");

    setTimeout(mensagem, tempo);


}

microondas(8000);



// correção

// const microondas = (tempo) => {
//     console.log('Iniciou...');

//     setTimeout(() => {
//         console.log('Finalizou!');
//     }, tempo);
// }

// microondas(2000);