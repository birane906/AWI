import React from 'react'
import Editeur from './Editeur'
import './Editeurs.css';


function Editeurs() {
    return (
        <div>
            <button>+</button>
            <h2>Les éditeurs et exposants</h2>
            <br/>
            
            <input type="search" /><button>Chercher</button>
            <Editeur/>
            <Editeur/>
            <Editeur/>
        </div>
    )
}

export default Editeurs
