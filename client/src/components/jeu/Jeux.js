import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'


const Jeux = (props) => {
    const [jeu,setJeu]=useState([]);

    const getJeu = async()=>{
        try{
            const response = await fetch("http://localhost:8080/api/listjeu");
            const jsonData = await response.json();
            setJeu(jsonData);

        }catch(err){
            console.error(err.message)
        }
    }
    useEffect(()=>{
        getJeu();
    },[]);
    console.log(jeu)

    return(
        <div>
            <h2> Liste des jeux</h2>
           <div className="m-2">
               <Table striped bordered hover size="sm" style={{margin: 0}}>
                   <thead>
                   <tr>
                       <th>Nom Jeu</th>
                       <th>Durée</th>
                       <th>Joueurs</th>
                       <th>Âge</th>
                       <th>Type</th>
                       <th>Prototype</th>
                       <th>Editeur</th>
                       <th>Modifier</th>
                       <th>Supprimer</th>
                   </tr>
                   </thead>
                   <tbody>
                   {
                       jeu.map(j => (
                           <tr key={j.id_jeu} class="text-center">
                               <td> {j.name_jeu} </td>
                               <td> {j.duree} </td>
                               <td> {j.nb_joueurs_min} - {j.nb_joueurs_max}</td>
                               <td> {j.agemin} </td>
                               <td> {j.libelle_type} </td>
                               {
                                    j.prototype ? <td> <input type="checkbox" checked/></td> : <td> <input type="checkbox" /></td> 
                                }
                               <td> {j.nom_editeur} </td>
                               <td> <Button variant="warning">Modifier</Button> </td>
                               <td > <Button variant="danger" >Supprimer</Button> </td>
                           </tr>


                       ))
                   }
                   </tbody>
               </Table>
           </div>

        </div>
    );
}


export default Jeux