var express = require('express');
var contactRouter = express.Router();
var pool = require("../db");
var cors = require('cors');

contactRouter.use(cors());
contactRouter.use(express.json());



// get all contact
contactRouter.get('/',function(req,res){
    const exposant = req.query.id_exposant
    console.log(exposant)
    var query=""
    if(exposant!=null){
        query = "select * from contact natural join exposant WHERE exposant.id_exposant="+exposant
    }
    else{
        query= "select * from contact natural join exposant"
    }

    pool.query(query)
        .then(data=>{
            res.json(data.rows)
        })
        .catch(err=>{
            console.error(err.message)
        })

})

//get a contact
contactRouter.get('/:id',function(req,res){
    try{
        const {id} =req.params;
        const contact = pool.query("SELECT * FROM contact WHERE id_contact=$1",[id]).then(data=>{
            res.json(data.rows[0])
        })
    }catch(err){
        console.error(err.message)
    }

})



module.exports = contactRouter;