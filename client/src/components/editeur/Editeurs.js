import React from 'react'
import SearchBox from '../searchBox/SearchBox';
import Editeur from './Editeur'
import './Editeurs.css'


function Editeurs() {
    return (
        <div>
            <button>+</button>
            <h2>Les éditeurs et exposants</h2>
            <br/>
            
            <SearchBox/>
            <Editeur/>
            <Editeur/>
            <Editeur/>
        </div>
    )
}

export default Editeurs
