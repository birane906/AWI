var express = require('express');
var jeuRouter = express.Router();
var pool = require("../db");
var cors = require('cors');

jeuRouter.use(cors());
jeuRouter.use(express.json());



jeuRouter.get('/:id',function(req,res){
    try{
        const {id } =req.params;
        const zone = pool.query("select * from jeu join editeur on jeu.id_editeur=editeur WHERE zone.id_zone=$1",[id]).then(data=>{
            res.json(data.rows)
        })
    }catch(err){
        console.error(err.message)
    }

})

jeuRouter.get('/',function(req,res){
    const zone = req.query.id_zone
    const editeur = req.query.id_editeur
    console.log(zone)
    console.log(editeur)
    var query=""
    if(zone!=null){
        query = "select * from jeu_reserve join jeux on jeu_reserve.id_jeu = jeux.id_jeu join zone on jeu_reserve.id_zone = zone.id_zone WHERE zone.id_zone="+zone
    }
    else if(editeur!=null){
        query = "select * from jeu_reserve join jeux on jeu_reserve.id_jeu = jeux.id_jeu join editeur on jeux.id_editeur=editeur.id_editeur WHERE editeur.id_editeur="+editeur
    }
    else{
        query= "select * from jeu_reserve join jeux on jeu_reserve.id_jeu = jeux.id_jeu join zone on jeu_reserve.id_zone = zone.id_zone"
    }

    pool.query(query)
        .then(data=>{
            res.json(data.rows)
        })
        .catch(err=>{
            console.error(err.message)
        })

})
module.exports = jeuRouter;