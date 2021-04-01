import React from 'react'
import "./Festival.css"

function Festival(props) {
  return (
    <div className="content">
      <h1> {props.name}</h1>
      <h2>Année {props.year}</h2>
      {
        props.specs.map((value, index) => {
          return (
            <div key={index}>
              <th>Espace</th>
              <ul>
                <li>Nombre de tables : {value.nb_table}</li>
                <li>Prix des tables : {value.prix_table} €</li>
                <li>Prix des m² : {value.prix_m2} €</li>
              </ul>
            </div>
          )
        })
      }
    </div>
    )
}

export default Festival