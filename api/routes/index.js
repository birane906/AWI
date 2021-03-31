var express = require('express');
var router = express.Router();
var editeurRouteur = require('./suivi')
var exposantRouter = require('./exposants')
var festivalsRouter = require('./festivals')
var loginRouter = require('./login');

router.get('/ping', function(req, res, next) {
  res.send({ping : "Server pinged"}); 
});
router.use("/suivi", editeurRouteur)
router.use("/exposants",exposantRouter)
router.use('/festivals', festivalsRouter)
router.use("/login", loginRouter)

module.exports = router;
