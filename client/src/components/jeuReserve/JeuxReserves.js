import React from 'react'
import SearchBox from '../searchBox/SearchBox'
import './JeuReserve.css';
import './JeuReserve'
import JeuReserve from './JeuReserve';

function JeuxReserves() {
    return (
        <div>
            
            <h1>Jeux réservés</h1>
            
            <SearchBox/>
            <table>
            <div className="edge">
        
        
        
        <tr>
            <th>Nom du jeu</th>
            <th>Editeur</th>
            <th>Exposant</th>
            <th>Joueurs</th>
            <th>Âge min</th>
            <th>Durée</th>
            <th>Type</th>
            <th>Zone</th>
            <th>Avant premiere</th>
            <th>Qté</th>
            <th>Table</th>
            <th>Placé ?</th>
            <th>Reçu ?</th>
            <th>A anim ?</th>
            <th>Date saisie</th>



        </tr>
        
        <JeuReserve/>
        <JeuReserve />
        <JeuReserve/>
        <JeuReserve/>
        
          
        </div>

        
        </table>
            
        </div>
    )
}

export default JeuxReserves
