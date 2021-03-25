var express = require('express');
var zoneRouter = express.Router();
var pool = require("../db");
var cors = require('cors');

zoneRouter.use(cors());
zoneRouter.use(express.json());


zoneRouter.get('/',function(req,res){
    try{
        const allediteur =  pool.query("select * from editeur ").then(data=>{
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
        const zone = pool.query("select * from editeur WHERE editeur.id_editeur=$1",[id]).then(data=>{
            res.json(data.rows)
        })
    }catch(err){
        console.error(err.message)
    }

})
module.exports = zoneRouter;