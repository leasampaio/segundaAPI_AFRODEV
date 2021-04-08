const ModeloTabelaAgendamento = require('../agendamentos/TabelaAgendamentos');
ModeloTabelaAgendamento.sync()
    .then(()=>{
        console.log('Tabela ciada com sucesso')
    })
    .catch(
        console.log('Erro, tabela não criada')
    );
