import React, {useEffect, useState} from 'react'
import './Exposant.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const Exposant = (props) => {
    const [exposants,setExposants]=useState([]);

    const getExposants = async()=>{
        try{
            const response = await fetch("http://localhost:8080/api/exposant");
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
            <h2> Liste d'exposant </h2>
            <div className="m-2">
                <Table striped bordered hover size="sm" style={{margin: 0}}>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Nom d'exposant</th>
                        <th>Supprimer</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        exposants.map(exposant => (
                            <tr key={exposant.id_exposant}>
                                <td> {exposant.id_exposant}</td>
                                <td> {exposant.nom_exposant} </td>
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

export default Exposant
