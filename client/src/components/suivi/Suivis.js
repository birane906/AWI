import React, {useEffect, useState} from 'react'
import SearchBox from '../searchBox/SearchBox';
import Suivi from './Suivi'
import './Suivi.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const Suivis = (props) => {
    const [exposants,setExposants]=useState([]);
    const [ displayedSuivis, setDisplayedSuivis ] = useState([]);

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

    const [ orderNom_exposant, setOrderNom_esposant] = useState(1)
    const [ orderPremier_Contact, setOrderPremier_Contact] = useState(1)
    const [ orderDeuxieme_Contact, setOrderDeuxieme_Contact] = useState(1)
    const [ orderTroisieme_Contact, setOrderTroisieme_Contact] = useState(1)
    const [ orderEst_Present, setOrderEst_Present] = useState(1)
    const [ orderEnvoye, setOrderEnvoye] = useState(1)


    const sortBy = (key, order, setOrder) => {
        const newDisplay = [...displayedSuivis]
        newDisplay.sort((a, b) => {
            if (a[key].toUpperCase() > b[key].toUpperCase()) {
                return order
            }
            
            return -order
        })
        setDisplayedSuivis(newDisplay)
        setOrder(-1 * order)
    }

    const [ editState, setEditState ] = useState(false)

    return(
        <div>
            <h2> Suivi d'exposant </h2>
            <Button variant={!editState ? "primary" : "secondary "} className="m-2" onClick={() => setEditState(!editState)}>
                {!editState ? "Enregistrer" : "En cours... "}
            </Button>
           <div className={"m-2"}>
               <Table striped bordered hover size="sm" responsive="md" style={{margin: 0}}>
                   <thead>
                   <tr>
                   <th onClick={() => sortBy("nom_exposant", orderNom_exposant, setOrderNom_esposant)}>Nom d'exposant</th>
                       <th>Premier contact</th>
                       <th>Deuxième contact</th>
                       <th>Troisième contact</th>
                       <th>Est present</th>
                       <th>CR envoyé</th>
                       <th>Commentaire</th>
                   </tr>
                   </thead>
                   <tbody>

                   {
                       exposants.map(exposant => (
                           <tr key={exposant.id_suivi}>
                               <td> {exposant.nom_exposant} </td>
                               <td> {exposant.premier_contact} </td>
                               <td> {exposant.deuxieme_contact} </td>
                               <td> {exposant.troisieme_contact} </td>
                               <td> {exposant.est_present.toString()} </td>
                               <td> {exposant.cr_envoye.toString()} </td>
                               <td> {exposant.commentaire} </td>
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