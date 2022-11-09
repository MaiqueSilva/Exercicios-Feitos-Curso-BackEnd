const celular = 99918888;

if (String(celular).length === 10) {

    const DDD = String(celular).slice(0, 2);

    console.log(`(${DDD}) ${String(celular).slice(2, 3)} ${String(celular).slice(3, 7)}-${String(celular).slice(7)}`)
} else if (
    (String(celular).length === 8)
) {

    console.log(`9 ${String(celular).slice(0, 4)}-${String(celular).slice(4)}`)
} else {
    console.log("Numero de teledone Invalido")
}

