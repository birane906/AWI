var express = require('express');
var router = express.Router();
var editeurRouteur = require('./suivi')
var exposantRouter = require('./exposant')

router.get('/ping', function(req, res, next) {
  res.send({ping : "Server pinged"}); 
});
router.use("/suivi", editeurRouteur)
router.use("/exposant",exposantRouter)

module.exports = router;
