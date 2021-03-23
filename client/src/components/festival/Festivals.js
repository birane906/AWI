import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Festival from './Festival'


function Festivals() {
  
    const [ festivals, setFestivals ] = useState([])

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
        <div>
        <div>
            {
                festivals.map((value, index) => {
                    return (
                        <Festival name={value.name} key={index}/>
                    )
                })
            }
        </div>
        <button > DISPLAY A FORM TO ADD FESTI</button>   
        </div>  
    )
}

export default Festivals