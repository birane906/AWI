var express = require('express');
var exposantRouter = express.Router();
var pool = require("../db");
var cors = require('cors');

exposantRouter.use(cors());
exposantRouter.use(express.json());



// get all exposant
exposantRouter.get('/',function(req,res){
    try{
        const allSuivi =  pool.query("SELECT * FROM exposant").then(data=>{
            //console.log(data)
            res.json(data.rows);
        });
    }catch(err){
        console.error(err.message);
    }
});

//get a exposant
exposantRouter.get('/:id',function(req,res){
    try{
        const {id} =req.params;
        const exposant = pool.query("SELECT * FROM exposant WHERE id_exposant=$1",[id]).then(data=>{
            res.json(data.rows[0])
        })
    }catch(err){
        console.error(err.message)
    }

})



module.exports = exposantRouter;