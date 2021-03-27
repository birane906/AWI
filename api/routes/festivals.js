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
        SELECT festival.id_festival, "year", "name", "prix_m2", "prix_table", "nb_table" FROM festival
        LEFT JOIN espace ON festival.id_festival=espace.id_festival
    `)
        .then(rep => {
            res.status(200).json(rep.rows)
        })
        .catch(err => {
            res.status(404).send("Error")
        })
})
router.post('/', (req, res) => {
    const name = req.body.name
    const year = req.body.year
    const espaces = req.body.espaces
    db.query(`
        INSERT INTO festival(year, name)
        VALUES ('${year}-01-01', '${name}') RETURNING *;
    `) 
        .then(rep => {
            var query = ""
            console.log(rep.rows);
            console.log(espaces);
            espaces.forEach((espace) => {
                query += `
                    INSERT INTO espace(prix_m2, prix_table, nb_table, id_festival)
                    VALUES (${espace.prix_m2}, ${espace.prix_table}, ${espace.nb_table}, ${rep.rows[0].id_festival});
                `
            })
            db.query(query)
                .then(rep => {
                    res.status(200).send("Inserted")
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
})

module.exports = router;