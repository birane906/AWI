import React, {useEffect, useState} from 'react'
import './Exposant.css'
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import Exposant from './Exposant'

const Exposants = (props) => {
    const [exposants,setExposants]=useState([]);
    const [ displayedExposants, setDisplayedExposants ] = useState([])

    function loadExposants() {
        axios.get('/api/exposants')
            .then(res => {
                const resData = res.data.map(value => {
                    for (const [key, val] of Object.entries(value)) {
                        val == null ? value[key] = "" : value[key] = val.toString();
                    }
                    return value
                })
                setExposants(resData)
                setDisplayedExposants(resData)
            })
            .catch(err => console.log(err))
    }
    useEffect(()=>{
        loadExposants();
    },[]);

    
    return(
        <div>
            <h2> Liste d'exposant </h2>
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Nom d'exposant</th>
                        <th>Supprimer</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                            displayedExposants.map((value, index) => {
                                return <Exposant datas={value} key={index} index={index} onChange={handleValExposantChange}/>
                            })
                    }
                    </tbody>
                </Table>
            </div>

        </div>
    );
}

export default Exposants
