const Sequelize = require('sequelize')
const instanciadb = require('../db')

const columns ={
    nome: {
        type:Sequelize.STRING,
        allowNull: false
    },
    email:{
        type:Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type:Sequelize.STRING,
        allowNull: false
    }
}
const sequelizeOpitions = {
    freezeTableName: true,
    tableName: 'usuario',
    timestamps:true,
    createdAt:'data_criacao',
    updateAt: 'data_atualizacao'

}
module.exports = instanciadb.define('usuarios', columns,sequelizeOpitions)