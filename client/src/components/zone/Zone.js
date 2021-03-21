import React from 'react'
import SearchBox from '../searchBox/SearchBox'

function Zone() {
    return (
        <div>
            <h1>Zone *numeroZone* - *Type Zone* : *nbJeuZone* jeux</h1>
            <h2>Jeux réservés</h2>
            <SearchBox />
            <div>
                *Nom du jeu*
                *editeur*
                *age min*
                *duree*
                *type*
                *avant 1ere* <input type="checkbox"/>
                *placé* <input type="checkbox"/>
                *recu* <input type="checkbox"/>
                *a anim* <input type="checkbox"/>
            </div>

            <div>
                nb titre jeu selectionné
                colonne affiché
            </div>
            
        </div>
    )
}

export default Zone
