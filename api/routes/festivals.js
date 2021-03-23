var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('/', (req, res) => {
    db.query(`
        SELECT * from "festival"
    `)
        .then(rep => {
            res.status(200).json(rep.rows)
        })
        .catch(err => {
            res.status(404).send("Error")
        })
})

module.exports = router;