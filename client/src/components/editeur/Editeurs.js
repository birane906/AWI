import React from 'react'
import Editeur from './Editeur'


function Editeurs() {
    return (
        <div>
            <h2>Les éditeurs et exposants</h2>
            <input type="search" />
            <Editeur/>
            <Editeur/>
            <Editeur/>
        </div>
    )
}

export default Editeurs
