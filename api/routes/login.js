var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    if (req.session.userId) {
        res.status("200").send("Auth")
    } else {
        res.status("401").send("Unauth")
    }
})

router.post('/', (req, res) => {
    const login = req.body.login
    const password = req.body.password
    if (login == "admin" && password == "admin") {
        req.session.userId = "admin"
        res.status(200).send("Valid")
    } else {
        res.status(401).send("Invalid login or password")
    }
});

module.exports = router;
