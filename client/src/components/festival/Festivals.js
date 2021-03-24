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
                var resData = res.data
                resData = resData.reduce((previous, current) => {
                    const key = current.id_festival
                    if (!previous[key]) {
                        previous[key] = {
                            year: current.year,
                            name: current.name,
                            specs: []
                        }
                    }
                    if (current.prix_m2 != null) {
                        previous[key].specs.push({
                            "prix_m2": current.prix_m2,
                            "prix_table": current.prix_table,
                            "nb_table": current.nb_table
                        })
                    }
                    return previous
                }, {})

                var newData = []
                Object.entries(resData).forEach((o, key) => {
                    newData.push({
                        "id_festival": key,
                        "year": o[1].year,
                        "name": o[1].name,
                        "specs": o[1].specs
                    })
                })
                setFestivals(newData)
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
                                    <Festival name={value.name} year={value.year.slice(0,4)} specs={value.specs} key={index}/>
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