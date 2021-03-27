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
            id_espace 
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

module.exports = router;
