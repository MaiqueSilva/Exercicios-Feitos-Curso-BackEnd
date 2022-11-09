const nome = 'Guido Cerqueira';


function geradorDeNickNAme(nome) {

    let nickname = "@"

    for (let item of nome) {
        if (item === " ") {
        } else {
            nickname += item
        };
        if (nickname.length === 13) {
            nickname = nickname.toLocaleLowerCase();
            return nickname

        }
    }
}

console.log(geradorDeNickNAme(nome))