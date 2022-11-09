const tabuada = (numero, callback) => {
    let resultado = ''

    for (item of numero) {

        for (let i = 0; i <= 10; i++) {
            resultado += `${item} x ${i} = ${item * i} \n`

            if (i === 10) {
                resultado += "---------------\n"
            }
        }
    }
    callback(resultado)

}

tabuada([1, 5, 2], (resultado) => {
    console.log(resultado)
})
