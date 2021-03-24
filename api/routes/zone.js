var express = require('express');
var zoneRouter = express.Router();
var pool = require("../db");
var cors = require('cors');

zoneRouter.use(cors());
zoneRouter.use(express.json());

// creat exposant
zoneRouter.post('/',function(req,res){
    try{
        const { nom_zone } = req.body;
        const newZone = pool.query("INSERT INTO zone(nom_zone) VALUES($1) RETURNING *",[nom_zone]);
        res.json(newZone);
    }catch(err){
        console.error(err.message);
    }
});


zoneRouter.get('/',function(req,res){
    try{
        const allzone =  pool.query("SELECT * FROM zone").then(data=>{
            console.log(data)
            res.json(data.rows);
        });
    }catch(err){
        console.error(err.message);
    }
});

zoneRouter.get('/',function(req,res){
    try{
        const jeuxReserves =  pool.query("SELECT * FROM jeux INNER JOIN jeu_reserve on jeux.id_jeu = jeu_reserve.id_jeu INNER JOIN reservation on jeu_reserve.id_reservation = reservation.id_reservation INNER JOIN festival on reservation.id_festival = festival.id_festival INNER JOIN espace on festival.id_espace = espace.id_espace INNER JOIN zone on espace.id_espace = zone.id_espace").then(data=>{
            console.log(data)
            res.json(data.rows);
        });
    }catch(err){
        console.error(err.message);
    }
});

zoneRouter.get('/:id',function(req,res){
    try{
        const {id } =req.params;
        const zone = pool.query("SELECT * FROM zone WHERE id_zone=$1",[id]).then(data=>{
            res.json(data.rows[0])
        })
    }catch(err){
        console.error(err.message)
    }

})
module.exports = zoneRouter;