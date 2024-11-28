var gatoStatusModel = require("../models/gatoStatusModel");

function cadastrarStatus(req, res) {
  var fome = req.body.fomeGatoServer;
  var sede = req.body.sedeGatoServer;
  var fkGato = req.body.gatoIdServer;
  var fkDono = req.body.donoIdServer;

  gatoStatusModel
    .cadastrarStatus(fome, sede, fkGato, fkDono)
    .then(function (resultado) {
      res.json(resultado);

      console.log(`Fome: ${fome}, Sede: ${sede}, fkGato: ${fkGato}`);
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

function autenticarStatus(req, res) {
  var fkDono = req.body.donoIdServer;

    gatoStatusModel
      .autenticarStatus(fkDono)
      .then(function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);

        
          console.log(resultadoAutenticar);

          res.json({
            fome: resultadoAutenticar[0].fome,
            sede: resultadoAutenticar[0].sede,
            dtHora: resultadoAutenticar[0].dtHora,
            status_vida: resultadoAutenticar[0].status_vida,
          });
       
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

  function deletar(req, res) {
    var fkDono = req.body.donoIdServer;

    gatoStatusModel
      .deletar(fkDono)
      .then(function (resultado) {
        res.json(resultado);
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
    cadastrarStatus,
    autenticarStatus,
    deletar
  };