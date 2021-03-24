import React, {useEffect, useState} from 'react'
import Zone from './Zone'

const Zones = (props) => {
    const [zones,setZones]=useState([]);

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
            <h2> Listes des zones </h2>
            <ul>
                {
                    zones.map(zone => (
                        <li key={zone.id_zone}>
                            <br/>
                            <Zone name_zone={zone.name_zone} 
                            />
                        </li>

                    ))
                }
            </ul>
        </div>
    );
}


export default Zones
