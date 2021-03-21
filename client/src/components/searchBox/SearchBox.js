import React from 'react'
import './SearchBox.css'
function SearchBox() {
    return (
        <div className="search-box">
            <input className="search-txt" type="search" name="" placeholder="Taper pour chercher" />
            <button>Trouver</button>
        </div>
    )
}

export default SearchBox