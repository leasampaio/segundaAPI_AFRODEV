const FormatoInvalido = require('./erros/Formatoinvalido');

class Serializar {
    json (dados){
        JSON.stringify(dados)
    }
    transformar(dados){
        if(this.contentType !== 'application/json'){
            throw new FormatoInvalido(this.contentType);
    
        }
        return this.json(this.filtrar(dados));
    }
    filtrarCampos (dados){
        const camposFiltrados = {};
        this.camposPermitidos.forEach(campo => {
            if(dados.hasOwnProperty(campo)){
                camposFiltrados[campo]= dados[campo];
            }
            
        });
    }
    filtrar(dados){
        let dadosFiltrados = this.filtrarCampos(dados);

        if(Array.isArray(dados)){
            dadosFiltrados.map((dados)=>{
                return this.filtrarCampos(dados);

            })
        }

        return dadosFiltrados;
    }
}

class SerializarAgendamento extends Serializar{
    constructor(contentType, camposPersonalizados){
        super()
        this.contentType = contentType;
        this.camposPermitidos = ['id', 'nome_cliente', 'data_agendamento'].concat(camposPersonalizados || [])
    }
}
module.exports ={
    Serializar: Serializar,
    SerializarAgendamento: SerializarAgendamento,
    FormatosValidos : ['application/json']
}
