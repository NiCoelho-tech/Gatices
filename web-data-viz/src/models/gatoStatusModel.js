var database = require("../database/config")

function cadastrarStatus(fome, sede, fkGato, fkDono) {
    var instrucaoSql = `
        INSERT INTO status_gato (fome, sede, fkGato, fkDono) VALUES ('${fome}', '${sede}', '${fkGato}', '${fkDono}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticarStatus(fkDono) {
    var instrucaoSql = `
        SELECT fome, sede, dtHora, status_vida FROM status_gato WHERE fkDono = '${fkDono}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(fkDono) {
    var instrucaoSql = `UPDATE status_gato SET status_vida = 'MORTO' WHERE sede = 0 OR fome = 0 AND fkDono = ${fkDono};`;

    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarStatus,
    autenticarStatus,
    deletar
}