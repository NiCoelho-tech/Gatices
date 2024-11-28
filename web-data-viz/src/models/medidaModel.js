var database = require("../database/config");

function buscarMedidasEmTempoReal(idGato) {

    var instrucaoSql = 
    `SELECT 
        fome AS Fome, 
        sede AS Sede,
        CONCAT(DATE_FORMAT(NOW(), '%Y-%m-%d'), ' ', DATE_FORMAT(dtHora, '%H:%i:%s')) AS 'Data e Hora',
        fkGato 
        FROM status_gato 
        WHERE fkGato = ${idGato} 
        ORDER BY id DESC 
        LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarMedidasEmTempoReal
}
