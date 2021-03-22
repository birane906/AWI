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
            {
                exposants.map(exposant => (
                    <div key={exposant.id_exposant}>
                        <h2>{exposant.nom_exposant}</h2>
                    </div>

                ))
            }
        </div>
    );
}

export default Editeurs
