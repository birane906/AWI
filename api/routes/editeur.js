var express = require('express');
var editeurRouter = express.Router();
var pool = require("../db");
var cors = require('cors');

editeurRouter.use(cors());
editeurRouter.use(express.json());

// creat exposant
editeurRouter.post('/',function(req,res){
    try{
        //console.log(req.body)
        const { nom_exposant } = req.body;
        const newExposant = pool.query("INSERT INTO exposant(nom_exposant) VALUES($1) RETURNING *",[nom_exposant]);
        //const newExposant = "working"
        res.json(newExposant);
    }catch(err){
        console.error(err.message);
    }
});

// get all exposant
editeurRouter.get('/',function(req,res){
    try{
        const allexposant =  pool.query("SELECT * FROM exposant").then(data=>{
            //console.log(data)
            res.json(data.rows);
        });
    }catch(err){
        console.error(err.message);
    }
});

//get an exposant
editeurRouter.get('/:id',function(req,res){
    try{
        const {id } =req.params;
        const exposant = pool.query("SELECT * FROM exposant WHERE id_exposant=$1",[id]).then(data=>{
            res.json(data.rows[0])
        })
    }catch(err){
        console.error(err.message)
    }

})
module.exports = editeurRouter;