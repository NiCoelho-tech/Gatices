var gatoModel = require("../models/gatoModel");

function cadastrar(req, res) {
  var nome = req.body.nomeGatoServer;
  var genero = req.body.generoServer;
  var raca = req.body.racaServer;
  var fkDono = req.body.donoServer;

  gatoModel
    .cadastrar(nome, genero, raca, fkDono)
    .then(function (resultado) {
      res.json(resultado);
      console.log(`Nome: ${nome}, Genero: ${genero}, Raca: ${raca}, Dono: ${fkDono}`);
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

function autenticar(req, res) {
  var idDono = req.body.idDonoServer;

    gatoModel
      .autenticar(idDono)
      .then(function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

        if (resultadoAutenticar.length == 1) {
          console.log(resultadoAutenticar);

          res.json({
            id: resultadoAutenticar[0].id,
            nome: resultadoAutenticar[0].nome,
            genero: resultadoAutenticar[0].genero,
            raca: resultadoAutenticar[0].raca,
          });
        } else if (resultadoAutenticar.length == 0) {
          res.status(403).send("Gato não encontrado!");
        } else {
          res.status(403).send("Mais de um gato existente!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro!  Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }

function listar(req, res) {
  gatoModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
  cadastrar,
  autenticar,
  listar
};
