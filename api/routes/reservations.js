var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', (req, res) => {
    db.query(`
        SELECT 
            date_emision_facture, 
            date_reservation,  
            prix_prestation, 
            date_paiment_facture, 
            libelle_etat_reservation, 
            nom_exposant, 
            id_festival, 
            id_espace,
            id_reservation 
        FROM exposant 
        LEFT JOIN reservation 
        ON reservation.id_exposant=exposant.id_exposant
        LEFT JOIN etat_reservation
        ON reservation.id_etat_reservation=etat_reservation.id_etat_reservation;
    `)
        .then(rep => {
            res.status(200).json(rep.rows);
        })
        .catch(err => console.log(err))
})
router.put('/', (req, res) => {
    const reservations = req.body.data
    var query = ""
    reservations.forEach((reservation) => {
        query += `
        UPDATE reservation
        SET 
            date_emision_facture=${reservation.date_emision_facture ? `date '${reservation.date_emision_facture}' + interval '1' day` : "NULL"}, 
            date_reservation=${reservation.date_reservation ? `date '${reservation.date_reservation}' + interval '1' day` : "NULL"}, 
            date_paiment_facture=${reservation.date_paiment_facture ? `date '${reservation.date_paiment_facture}' + interval '1' day` : "NULL"}
        WHERE 
            id_reservation=${reservation.id_reservation};
    `
    })
    db.query(query)
        .then(rep => {
            res.status(200).send("Saved")
        })
        .catch(err => {
            console.log(query,err);
            res.status(404).send("error")
        })
})

module.exports = router;
