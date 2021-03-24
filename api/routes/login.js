var express = require('express');
var router = express.Router();
var db = require('../db');

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
    db.query(`
        SELECT "idUser" FROM "user"
        WHERE 
                '${login}'="nameUser"
            AND crypt('${password}',"passwordUser")="passwordUser"`)
            .then(data => {
                if (data.rows.length > 0) {
                    req.session.userId = "admin"
                    res.status(200).send("Valid")
                } else {
                    res.status(401).send("Invalid login or password")
                }
            })
            .catch(err => {
                console.log(err);
                res.status(401).send("Invalid login or password")
            })
});

module.exports = router;
