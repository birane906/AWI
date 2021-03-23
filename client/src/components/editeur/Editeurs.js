import React, {useEffect, useState} from 'react'
import SearchBox from '../searchBox/SearchBox';
import Editeur from './Editeur'
import './Editeurs.css'


const Editeurs = (props) => {
    const [exposants,setExposants]=useState([]);

    const getExposants = async()=>{
        try{
            const response = await fetch("http://localhost:8080/api/editeur");
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
            <ul>
                {
                    exposants.map(exposant => (
                        <li key={exposant.id_suivi}>
                            <br/>
                            <Editeur nom_exposant={exposant.nom_exposant} premier_contact={exposant.premier_contact}
                                     deuxieme_contact={exposant.deuxieme_contact} troisieme_contact={exposant.troisieme_contact}
                                     est_present={exposant.est_present} cr_envoye={exposant.cr_envoye}
                                     commentaire={exposant.commentaire}
                            />
                        </li>

                    ))
                }
            </ul>
        </div>
    );
}

export default Editeurs
