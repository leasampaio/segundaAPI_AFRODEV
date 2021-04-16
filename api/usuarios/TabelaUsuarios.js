const {listar, buscarPorPK, remover} = require('../agendamentos/TabelaAgendamento')
const modeloUsuario = require('./modelTabelaUsuarios')

module.exports={
    async listar(){
        try{
            return await modeloUsuario.findAll({
                raw: true,
            })
        }
        catch(error){
            throw error
        }
        
    },
    async adicionar (usuario){
        return await modeloUsuario.create(usuario);
    },
    async buscarPorPK(id){
        try{
            return await modeloUsuario.findByPk(id)
        
        }
        catch(error){
            throw error
        }
        
    },
    async buscarPorEmail(email){
        try{
            return await modeloUsuario.findOne({
                where:{
                    email:email
                }
                
            })
            
        }
        catch(error){
            throw error
        }
       
    },
    async atualizar(id, dados){
        try{
            return modeloUsuario.update(
                dados, {
                    where:{
                        id:id
                    }
                }
                )
            
        }catch(error){
            throw error
        }
        
    },
    async remover(id){
        
        try{
            return modeloUsuario.destroy(
                {
                    where:{
                        id:id
                    }
                }
            )
        }
        catch(error){
            throw error
        }
    }
}
