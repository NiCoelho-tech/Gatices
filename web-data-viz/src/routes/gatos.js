var express = require("express");
var router = express.Router();

var gatoController = require("../controllers/gatoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    gatoController.cadastrar(req, res);
});

router.post("/autenticar", function(req, res) {
    gatoController.autenticar(req, res);
})

router.get("/listar", function(req, res) {
    gatoController.listar(req, res);
}) 

module.exports = router;