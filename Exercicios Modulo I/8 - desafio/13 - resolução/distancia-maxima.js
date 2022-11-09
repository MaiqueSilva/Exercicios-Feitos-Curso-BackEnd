function processData(input) {
    let linhas = input.trim().split("\n");
    let coordenadas = [];

    for (const linha of linhas) {
        let coordenadasXY = linha.split(" ")
        coordenadas.push({
            x: coordenadasXY[0],
            y: coordenadasXY[1]
        });
    }


    let x1
    let y1
    let x2
    let y2

    let valorMaximo = 0

    for (let i = 0; i < coordenadas.length; i++) {

        for (let j = 1; j < coordenadas.length; j++) {
            let x1 = coordenadas[i].x;
            let y1 = coordenadas[i].y;
            let x2 = coordenadas[j].x;
            let y2 = coordenadas[j].y;

            let calculo = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
            if (calculo >= valorMaximo) {
                valorMaximo = calculo
            }

        }
    }
}



