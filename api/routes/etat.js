var express = require('express')
var router = express.Router();
var db = require('../db')

router.get('/', (req, res) => {
    db.query(`
        SELECT * FROM etat_reservation
    `)
        .then(rep => {
            res.status(200).json(rep.rows)
        })
        .catch(err => {
            console.log(err);
            res.status(404).send('err')
        })
})

module.exports = router;
