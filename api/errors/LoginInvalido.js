class LoginInvalido extends Error{
    constructor(){
        super('email ou senha inválidos!')
        this.name = 'LoginInvalido'
        this.idError = 7;
    }
}

module.exports= LoginInvalido;