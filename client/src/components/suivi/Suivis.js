import React, {useEffect, useState} from 'react'
import SearchBox from '../searchBox/SearchBox';
import Suivi from './Suivi'
import './Suivi.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const Suivis = (props) => {
    const [exposants,setExposants]=useState([]);

    const getExposants = async()=>{
        try{
            const response = await fetch("http://localhost:8080/api/suivi");
            const jsonData = await response.json();
            setExposants(jsonData);

        }catch(err){
            console.error(err.message)
        }
    }
    useEffect(()=>{
        getExposants();
    },[]);
    console.log(exposants)

    return(
        <div>
            <h2> Suivi d'exposant </h2>
           <div>
               <Table striped bordered hover size="sm">
                   <thead>
                   <tr>
                       <th>id</th>
                       <th>Nom d'exposant</th>
                       <th>Premier contact</th>
                       <th>Deuxième contact</th>
                       <th>Troisème contact</th>
                       <th>Est present</th>
                       <th>CR envoyé</th>
                       <th>Commentaire</th>
                       <th>Modifier</th>
                       <th>Supprimer</th>
                   </tr>
                   </thead>
                   <tbody>
                   {
                       exposants.map(exposant => (
                           <tr key={exposant.id_suivi}>
                               <br/>
                               <td> {exposant.nom_exposant} </td>
                               <td> {exposant.premier_contact} </td>
                               <td> {exposant.deuxieme_contact} </td>
                               <td> {exposant.troisieme_contact} </td>
                               <td> {exposant.est_present.toString()} </td>
                               <td> {exposant.cr_envoye.toString()} </td>
                               <td> {exposant.commentaire} </td>
                               <td> <Button variant="warning">Modifier</Button> </td>
                               <td> <Button variant="info">Supprimer</Button> </td>
                           </tr>


                       ))
                   }
                   </tbody>
               </Table>
           </div>

        </div>
    );
}

export default Suivis
