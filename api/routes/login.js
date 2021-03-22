var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    const login = req.body.login
    const password = req.body.password
    if (login == "admin" && password == "admin") {
        req.session.id = "admin"
        res.status(200).send("Valid")
    } else {
        res.status(401).send("Invalid login or password")
    }
});

module.exports = router;
