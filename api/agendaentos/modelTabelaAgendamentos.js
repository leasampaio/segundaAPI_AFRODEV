const Sequelize = require('sequelize');
const instanciabd = require('../db');

const columns ={
    nomecliente:{
        type:Sequelize.STRING,
        allowNull:false
    },
    nome_servico:{
        type:Sequelize.STRING,
        allowNull:false
    },
    status:{
        type:Sequelize.ENUM('agendamento', 'cancelado'),
        allowNull:false
    }
}
const sequelizeOptions ={
    freezeTableName:true,
    tableName:"agendamento",
    timestamps:true,
    createAt:'data_criacao',
    updateSt:'data_atualizao'
}
module.exports = instanciabd.define('agendamento',columns, sequelizeOptions)