var express = require('express');
var router = express.Router();
var editeurRouteur = require('./suivi')
var exposantRouter = require('./exposant')
var festivalsRouter = require('./festivals')
var contactRouter = require('./contact')
var loginRouter = require('./login');

router.get('/ping', function(req, res, next) {
  res.send({ping : "Server pinged"}); 
});
router.use("/suivi", editeurRouteur)
router.use("/exposant",exposantRouter)
router.use("/contact",contactRouter)
router.use('/festivals', festivalsRouter)
router.use("/login", loginRouter)

module.exports = router;
