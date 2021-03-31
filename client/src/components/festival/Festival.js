import React from 'react'
import "./Festival.css"
import { Table } from 'react-bootstrap';

function Festival(props) {
  return (
    <Table className="content">
      <h1> {props.name}</h1>
      <h2>Année {props.year}</h2>
      {
        props.specs.map((value, index) => {
          return (
            <Table key={index}>
              <th>Espace</th>
              <ul>
                <li>Nombre de tables : {value.nb_table}</li>
                <li>Prix des tables : {value.prix_table} €</li>
                <li>Prix des m² : {value.prix_m2} €</li>
              </ul>
            </Table>
          )
        })
      }
    </Table>
    )
}

export default Festival