var express = require('express');
var editeurRouter = express.Router();
var pool = require("../db");
var cors = require('cors');

editeurRouter.use(cors());
editeurRouter.use(express.json());

// creat suivi exposant
editeurRouter.post('/',function(req,res){
    try{
        console.log(req.body)
        const commentaire  = req.body.commentaire;
        const premier_contact  = req.body.premier_contact;
        const deuxieme_contact = req.body.deuxieme_contact;
        const troiseme_contact  = req.body.troiseme_contact;
        const est_present = req.body.est_present;
        const cr_envoye = req.body.cr_envoye;
        const id_festival = req.body.id_festival;
        const id_exposant = req.body.id_exposant;
        const newSuivi = pool.query("INSERT INTO suivi_contact(commentaire,premier_contact,deuxieme_contact,troisieme_contact,est_present,cr_envoye,id_festival,id_exposant) VALUES($1,$2,$3,$4,$5,$6,$7,$8)",[commentaire,premier_contact,deuxieme_contact,troiseme_contact,est_present,cr_envoye,id_festival,id_exposant]).then(data=>{
            res.json(data);
            console.log(data)
        });
        //const newExposant = "working"

    }catch(err){
        console.error(err.message);
    }
});

// get all suivi exposant
editeurRouter.get('/',function(req,res){
    try{
        const allSuivi =  pool.query("SELECT * FROM suivi_contact JOIN exposant ON suivi_contact.id_exposant=exposant.id_exposant").then(data=>{
            //console.log(data)
            res.json(data.rows);
        });
    }catch(err){
        console.error(err.message);
    }
});

//get an suivi
editeurRouter.get('/:id',function(req,res){
    try{
        const {id} =req.params;
        const suivi = pool.query("SELECT * FROM suivi_contact WHERE id_suivi=$1",[id]).then(data=>{
            res.json(data.rows[0])
        })
    }catch(err){
        console.error(err.message)
    }

})
module.exports = editeurRouter;