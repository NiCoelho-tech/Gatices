var database = require("../database/config")

function autenticar(idDono) {
    var instrucaoSql = `
        SELECT id, nome, genero, raca FROM gato WHERE fkDono = '${idDono}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, genero, raca, fkDono) {
    var instrucaoSql = `
        INSERT INTO gato (nome, genero, raca, fkDono) VALUES ('${nome}', '${genero}', '${raca}', '${fkDono}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar() {
    var instrucaoSql = `SELECT id, nome, genero, raca, fkDono FROM gato`;

    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    autenticar,
    listar
};