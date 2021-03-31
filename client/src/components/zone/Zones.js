import React, {useEffect, useState} from 'react'
import Collapse from 'react-bootstrap/Collapse'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './Zone.css'

const Zones = (props) => {
    const [zones,setZones]=useState([]);
    const [open, setOpen] = useState(false);

    const getZones = async()=>{
        try{
            const response = await fetch("http://localhost:8080/api/zone");
            const jsonData = await response.json();
            setZones(jsonData);

        }catch(err){
            console.error(err.message)
        }
    }
    useEffect(()=>{
        getZones();
    },[]);
    console.log(zones)

    return(
        <div>
            
            <h1> Listes des zones </h1>
            {
                    zones.map(zone => (
           
                    <div> 
                        <h2> {zone.name_zone} </h2>
                        <h4> Jeux réservés</h4>
                        <Button  onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                                    v
                                </Button>
                        <Collapse in={open}>
                        <Table  striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>Nom du jeu</th>
                                <th>Editeur</th>
                                <th>Joueurs</th>
                                <th>Âge min</th>
                                <th>Durée</th>
                                <th>Type</th>
                                <th>Placé ?</th>
                                <th>Reçu ?</th>
                                <th>A anim ?</th>
                                </tr>
                            </thead>
                    
                            <tbody>
            
                            <tr key={zone.name_zone}>
                            <td> {zone.name_jeu}</td>
                            <td> {zone.nom_editeur}</td>
                            <td> {zone.nb_joueurs_min} - {zone.nb_joueurs_max}</td>
                        
                            <td> {zone.agemin}</td>
                            <td> {zone.duree}</td>
                            <td> {zone.libelle_type}</td>
                            {
                            zone.place_plan
                                ? <td> <input type="checkbox" checked/></td>
                                : <td> <input type="checkbox" /></td> 
                            }
                            {
                            zone.recu
                                ? <td> <input type="checkbox" checked/></td>
                                : <td> <input type="checkbox" /></td> 
                            }
                            {
                            zone.anim
                                ? <td> <input type="checkbox" checked/></td>
                                : <td> <input type="checkbox" /></td> 
                            }         
                            <td> <Button variant="info">Supprimer</Button> </td>
                            </tr>  
                            
                            </tbody>
                            </Table>
                            </Collapse>
                            </div>
                    ))
                                 
                }
        </div>
    );
}


export default Zones