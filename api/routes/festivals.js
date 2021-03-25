var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('/:festivalName', (req, res) => {
    db.query(`
        SELECT * from "festival"
        WHERE "name"='${req.params.festivalName}'
    `)
        .then(rep => {
            if (rep.rows.length > 0) {
                res.status(200).json(rep.rows)
            } else {
                res.status(404).send('Not found')
            }
        })
        .catch(err => {
            res.status(404).send('Error')
        })
})
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