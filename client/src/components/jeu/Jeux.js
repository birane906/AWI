import React from 'react'
import Jeu from './Jeu'

function Jeux(props) {
    return (
        <div>
            <input type="text" placeholder="Rechercher un jeu"/>
            <Jeu/>
            <Jeu/>
        </div>
    )
}

export default Jeux
