var express = require('express');
var zoneRouter = express.Router();
var pool = require("../db");
var cors = require('cors');

zoneRouter.use(cors());
zoneRouter.use(express.json());

// creat exposant
zoneRouter.post('/',function(req,res){
    try{
        //console.log(req.body)
        const { nom_zone } = req.body;
        const newZone = pool.query("INSERT INTO zone(nom_zone) VALUES($1) RETURNING *",[nom_zone]);
        //const newExposant = "working"
        res.json(newZone);
    }catch(err){
        console.error(err.message);
    }
});

// get all exposant
zoneRouter.get('/',function(req,res){
    try{
        const allzone =  pool.query("SELECT * FROM zone").then(data=>{
            //console.log(data)
            res.json(data.rows);
        });
    }catch(err){
        console.error(err.message);
    }
});

//get an exposant
zoneRouter.get('/:id',function(req,res){
    try{
        const {id } =req.params;
        const exposant = pool.query("SELECT * FROM zone WHERE id_zone=$1",[id]).then(data=>{
            res.json(data.rows[0])
        })
    }catch(err){
        console.error(err.message)
    }

})
module.exports = zoneRouter;