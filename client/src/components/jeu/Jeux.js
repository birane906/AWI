import React from 'react'
import SearchBox from '../searchBox/SearchBox'
import Jeu from './Jeu'

function Jeux(props) {
    return (
        <div>
            <SearchBox placeholder="Rechercher un jeu " handleChange={(e) => console.log(e)}/>
            <Jeu/>
            <Jeu/>
        </div>
    )
}

export default Jeux
