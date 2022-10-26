const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function filaAtendimento(procedimento) {

    if (procedimento === "atender") {
        pacientes.splice(0, 1);
        console.log(pacientes.join());
    } else if (procedimento === "agendar") {
        pacientes.splice(pacientes.length, 0, pacientes[0]);
        pacientes.splice(0, 1);
        console.log(pacientes.join());
    } else if (procedimento === "lista atualizada") {
        console.log(pacientes.join());
    }

}



filaAtendimento("agendar");
filaAtendimento("agendar");
filaAtendimento("agendar");
filaAtendimento("atender");