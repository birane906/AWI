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
        const allzone =  pool.query("select * from zone join espace on zone.id_espace = espace.id_espace join festival on espace.id_festival=festival.id_festival join jeu_reserve on jeu_reserve.id_zone=zone.id_zone").then(data=>{
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
        const zone = pool.query("select * from zone join espace on zone.id_espace = espace.id_espace join festival on espace.id_festival=festival.id_festival join jeu_reserve on jeu_reserve.id_zone=zone.id_zone WHERE zone.id_zone=$1",[id]).then(data=>{
            res.json(data.rows[0])
        })
    }catch(err){
        console.error(err.message)
    }

})
module.exports = zoneRouter;