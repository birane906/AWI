var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', (req, res) => {
    db.query(`
        SELECT 
            date_emision_facture, 
            date_reservation, 
            id_reservation, 
            prix_prestation, 
            date_paiment_facture, 
            id_etat_reservation, 
            nom_exposant, 
            id_festival, 
            id_espace 
        FROM reservation, exposant
        WHERE 
            reservation.id_exposant=exposant.id_exposant;
    `)
        .then(rep => {
            res.status(200).json(rep.rows);
        })
        .catch(err => console.log(err))
})

module.exports = router;
