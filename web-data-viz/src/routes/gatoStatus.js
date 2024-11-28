var express = require("express");
var router = express.Router();

var gatoStatusController = require("../controllers/gatoStatusController");

router.post("/cadastrar", function (req, res) {
    gatoStatusController.cadastrarStatus(req, res);
});

router.post("/autenticar", function(req, res) {
    gatoStatusController.autenticarStatus(req, res);
})

router.post("/deletar", function(req, res) {
    gatoStatusController.deletar(req, res);
})

module.exports = router;