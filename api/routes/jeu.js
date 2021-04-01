var express = require('express')
var router = express.Router()
var db = require("../db")

router.get('/', (req, res) => {
    const id_editeur = req.query.id_editeur
    if (id_editeur) {
        query = `
            SELECT 
                DISTINCT id_jeu, 
                nb_joueurs_min, 
                nb_joueurs_max, 
                agemin, 
                notice, 
                isprototype, 
                duree, 
                jeux.id_type, 
                id_editeur, 
                name_jeu, 
                libelle_type, 
                '' as name_zone
            FROM jeux, type, zone
            WHERE 
                    id_editeur=${id_editeur} 
                AND jeux.id_type=type.id_type
        `
    } else {
        res.send()
    }
    db.query(query) 
        .then(rep => {
            res.status(200).json(rep.rows)
        })
        .catch(err => console.log(err))
}) 

module.exports = router