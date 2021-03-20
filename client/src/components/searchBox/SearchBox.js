import React from 'react'

function SearchBox(props) {
    return (
        <div>
            <input 
            type="search"
            className="search"
            placeholder={props.placeholder}
            onChange={props.handleChange}
            />
        </div>
    )
}

export default SearchBox
