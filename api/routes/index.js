var express = require('express');
var router = express.Router();
var editeurRouteur = require('./editeur')

router.get('/ping', function(req, res, next) {
  res.send({ping : "Server pinged"}); 
});
router.use("/editeur", editeurRouteur)

module.exports = router;
