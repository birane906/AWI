var express = require('express');
var router = express.Router();
var festivalsRouter = require('./festivals')

router.get('/ping', function(req, res, next) {
  res.send({ping : "Server pinged"}); 
});
router.use('/festivals', festivalsRouter)

module.exports = router;
