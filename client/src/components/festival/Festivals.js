import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Festival from './Festival'


function Festivals() {
  
    const [ festivals, setFestivals ] = useState([])
    const location = useLocation()

    function loadFestivals() {
        axios.get('/api/festivals')
            .then(res => {
                setFestivals(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => loadFestivals(), [])

    return (
        <div class="mainview">
            <div>
                <h1>Liste des festivals</h1>
                <Button variant="secondary">+</Button>
            </div>

            <div className="m-4">
                <div className="row">
                    {
                        festivals.map((value, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                    <Festival name={value.name} year={value.year} key={index}/>
                                    <Link to={location.pathname + "/" + value.name} key={index}>
                                    </Link>
                                    <Button href={location.pathname + "/" + value.name}>Voir plus</Button>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>

    )
}

export default Festivals