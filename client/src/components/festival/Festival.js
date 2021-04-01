import React from 'react'
import "./Festival.css"
import ListGroup from 'react-bootstrap/ListGroup'

function Festival(props) {
    return (
          <div className="content">
           <h2> {props.name}</h2>
           <h3>Année {props.year}</h3>
              {
                  props.specs.map((value, index) => {
                      return (
                          <div key={index}>
                              <th>Espace</th>
                              <ListGroup>
                                  <ListGroup.Item>Nombre de tables : {value.nb_table}</ListGroup.Item>
                                  <ListGroup.Item>Prix des tables : {value.prix_table} €</ListGroup.Item>
                                  <ListGroup.Item>Prix des m² : {value.prix_m2} €</ListGroup.Item>
                              </ListGroup>
                          </div>
                      )
                  })
              }
          </div>
    )
}

export default Festival