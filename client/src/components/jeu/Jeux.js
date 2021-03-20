import React from 'react'
import { useState, setState } from 'react';
import SearchBox from '../searchBox/SearchBox'
import Jeu from './Jeu'

function Jeux(props) {
    
    return (
        <div>
            <SearchBox placeholder="Rechercher un jeu " handleChange={(e) => this.setState({searchField:e.target.value})}/>
            <Jeu/>
            <Jeu/>
        </div>
    )
}

export default Jeux
