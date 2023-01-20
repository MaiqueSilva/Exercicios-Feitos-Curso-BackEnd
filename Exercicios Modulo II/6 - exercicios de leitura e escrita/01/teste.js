const { getStateFromZipcode } = require(`utils-playground`)

const promessa = async () => {

    const estado = await getStateFromZipcode("03916000").then((estado) => {
        return estado;

    })

    console.log(estado)
}

