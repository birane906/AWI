<<<<<<< HEAD
import React, { useState } from 'react'
import Festival from './Festival'


function Festivals() {
  
    return (
        <div>
        <div>
            <Festival/>
            <br/><br/>
            <Festival/>
            <br/><br/>
            
        </div>
        <button > DISPLAY A FORM TO ADD FESTI</button>
        
=======
import React from 'react'
import Festival from './Festival'


function Festivals(props) {
    return (
        <div>
            <Festival/>
            <Festival/>
            <Festival/>
            <Festival/>
            <Festival/>
>>>>>>> ab9da57225deea498b754e7fe73685aedf3dc7af
        </div>
    )
}

export default Festivals