import React from 'react'
import JeuReserve from './JeuReserve'
import SearchBox from '../searchBox/SearchBox'

function JeuxReserves() {
    return (
        <div>
            <h1>Jeux réservés</h1>
            <SearchBox/>
            <JeuReserve/>
            <JeuReserve/>
            <JeuReserve/>
            <JeuReserve/>
        </div>
    )
}

export default JeuxReserves
