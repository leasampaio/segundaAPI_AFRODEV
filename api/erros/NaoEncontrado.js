class NaoEncontrado extends Error{
    constructor(agendamento){
        super('O agendamento não foi encontrado!');
        this.name = 'NaoEncontrado';
        this.id = 4;

    }
}
module.exports = NaoEncontrado;