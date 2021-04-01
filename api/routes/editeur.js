var express = require('express');
var editeurRouter = express.Router();
var pool = require("../db");
var cors = require('cors');

editeurRouter.use(cors());
editeurRouter.use(express.json());

editeurRouter.get('/jeux',function(req,res){

    var query= "select * from jeux join editeur on jeux.id_editeur=editeur.id_editeur"
    pool.query(query)
        .then(data=>{
            res.json(data.rows)
        })
        .catch(err=>{
            console.error(err.message)
        })

})

editeurRouter.get('/:id',function(req,res){
    try{
        const {id } =req.params;
        const editeur = pool.query("select * from jeux join editeur on jeux.id_editeur=editeur.id_editeur WHERE editeur.id_editeur=$1",[id]).then(data=>{
            res.json(data.rows)
        })
    }catch(err){
        console.error(err.message)
    }

})

editeurRouter.get('/',(req, res) => {
    pool.query('SELECT * FROM editeur')
        .then(rep => {
            res.status(200).json(rep.rows)
        })
        .catch(err  => {console.log(err)})
})

module.exports = editeurRouter;