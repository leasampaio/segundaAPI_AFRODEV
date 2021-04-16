const Usuario = require('./Usuario');
const LoginInvalido = require('../errors/LoginInvalido');
const NaoEncontrado = require ('../errors/NaoEncontrado')
const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer')
const jwt = require('jsonwebtoken')


function conferirUsuario (usuario){
    if(!usuario){
        throw new NaoEncontrado('Usuário');
    }

}
async function conferirSenha(senha, senhaHash){
    const  senhaCorreta = await bcrypt.compare(senha,senhaHash);
    if(!senhaCorreta){
        throw new LoginInvalido();
    }
}
passport.use(
    new BearerStrategy(
        async (token, done) =>{
            try{
                const payload = jwt.verify(token, process.env.JWT_KEY)
                const Usuario = new Usuario({id:payload.id});
                await usuario.buscarPorId()
                done(null, usuario);
            }
            catch(error){
                done(error)
            }
        }
    )
)

module.exports={
    passport: passport
    
}