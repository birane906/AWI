var express = require('express');
var router = express.Router();
var loginRouter = require('./login');

router.get('/ping', function(req, res, next) {
  res.send({ping : "Server pinged"}); 
});
router.use("/login", loginRouter)

module.exports = router;
