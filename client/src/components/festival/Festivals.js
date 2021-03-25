import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
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
        <div className="m-4">
            <div className="row">
                {
                    festivals.map((value, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <Link to={location.pathname + "/" + value.name} key={index}>
                                    <Festival name={value.name} year={value.year} key={index}/>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <button > DISPLAY A FORM TO ADD FESTI</button>   
        </div>  
    )
}

export default Festivals