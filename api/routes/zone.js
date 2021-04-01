var express = require('express');
var zoneRouter = express.Router();
var pool = require("../db");
var cors = require('cors');

zoneRouter.use(cors());
zoneRouter.use(express.json());



zoneRouter.get('/:id',function(req,res){
    try{
        const {id } =req.params;
        const zone = pool.query("select * from zone join espace on zone.id_espace = espace.id_espace join festival on espace.id_festival=festival.id_festival WHERE zone.id_zone=$1",[id]).then(data=>{
            res.json(data.rows)
        })
    }catch(err){
        console.error(err.message)
    }

})

zoneRouter.get('/',function(req,res){
    const festival = req.query.id_festival
    const etat_festival = req.query.etat_festival
    console.log(festival)
    console.log(etat_festival)
    var query=""

    if(festival!=null){
        query = "select * from zone join espace on zone.id_espace = espace.id_espace join festival on espace.id_festival=festival.id_festival WHERE festival.id_festival="+festival
    }
    else if(etat_festival!=null){
        query = "select * from zone join espace on zone.id_espace = espace.id_espace join festival on espace.id_festival=festival.id_festival WHERE festival.etat_festival="+etat_festival
    }
    else{
        query= "select * from zone join espace on zone.id_espace = espace.id_espace join festival on espace.id_festival=festival.id_festival"
    }

    pool.query(query)
        .then(data=>{
            res.json(data.rows)
        })
        .catch(err=>{
            console.error(err.message)
        })

})
module.exports = zoneRouter;