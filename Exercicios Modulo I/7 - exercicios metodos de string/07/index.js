const email = ".messias@cubos";

const indexArroba = email.indexOf("@");
const indexPonto = email.indexOf(".");
const pontoFinal = email.lastIndexOf(".")

if (indexArroba >= 0 && indexPonto >= 0) {
    if (indexPonto === 0 || indexPonto === email.length - 1 || pontoFinal === email.length - 1) {

        console.log("E-mail Invalido ")
    } else {
        console.log("E-mail valido ")
    }
} else {
    console.log("E-mail inválido")
}
