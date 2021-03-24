var express = require('express');
var router = express.Router();
var editeurRouteur = require('./suivi')

router.get('/ping', function(req, res, next) {
  res.send({ping : "Server pinged"}); 
});
router.use("/suivi", editeurRouteur)

module.exports = router;
