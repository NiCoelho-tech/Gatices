var gatoModel = require("../models/gatoModel");

function cadastrar(req, res) {
  var nome = req.body.nomeGatoServer;
  var genero = req.body.generoServer;
  var raca = req.body.racaServer;

  gatoModel
    .cadastrar(nome, genero, raca)
    .then(function (resultado) {
      res.json(resultado);
      console.log(`Nome: ${nome}, Genero: ${genero}, Raca: ${raca}`);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar o cadastro! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  cadastrar
};
