const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];


function agendarPaciente(pacientes, pessoa) {
    pacientes.splice(pacientes.length, 0, pessoa);
    pacientes.splice(pacientes.indexOf(pessoa), 1);
    return console.log(pacientes.join());
};


function atenderPaciente(pacientes) {
    pacientes.splice(0, 1);
    return console.log(pacientes.join());
};

function cancelarAtendimento(pacientes, pessoa) {
    pacientes.splice(pacientes.indexOf(pessoa), 1);
    return console.log(pacientes.join());
};

agendarPaciente(pacientes, "Pedro");
atenderPaciente(pacientes);
cancelarAtendimento(pacientes, "Joana");
