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
        const { nom_exposant } = req.body
        const newExposant = pool.query("INSERT INTO exposant(nom_exposant) VALUES($1) RETURNING *",[nom_exposant]);
        //const newExposant = "working"
        res.json(newExposant);
    }catch(err){
        console.error(err.message)
    }
});

// View exposant
editeurRouter.get('/',function(req,res){
    try{

    }catch(err){
        console.error(err.message)
    }
})

module.exports = editeurRouter;