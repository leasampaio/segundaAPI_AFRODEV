class NaoEncontrado extends Error{
    constructor(classe){
        super(`O ${classe} não foi encontrado!`);
        this.name = 'NaoEncontrado';
        this.id = 4;

    }
}
module.exports = NaoEncontrado;