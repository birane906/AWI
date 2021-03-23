var express = require('express');
var router = express.Router();
var zoneRouter = require('./zone')

router.get('/ping', function(req, res, next) {
  res.send({ping : "Server pinged"}); 
});

router.use("/zone", zoneRouter)

module.exports = router;
