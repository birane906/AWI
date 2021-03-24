var express = require('express');
var router = express.Router();
var zoneRouter = require('./zone')
var editeurRouteur = require('./suivi')
var exposantRouter = require('./exposant')
var festivalsRouter = require('./festivals')
var loginRouter = require('./login');

router.get('/ping', function(req, res, next) {
  res.send({ping : "Server pinged"}); 
});
router.use("/suivi", editeurRouteur)
router.use("/exposant",exposantRouter)
router.use('/festivals', festivalsRouter)
router.use("/login", loginRouter)

router.use("/zone", zoneRouter)

module.exports = router;
