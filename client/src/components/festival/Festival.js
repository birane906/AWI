import React from 'react'
import "./Festival.css"
import ListGroup from 'react-bootstrap/ListGroup'

function Festival(props) {
    return (
        
          <div className="content">
           <h2> {props.name}</h2>
           <h3>Année {props.year}</h3>

            <ListGroup>
                <ListGroup.Item>Nombre d'emplacement Total : </ListGroup.Item>
                <ListGroup.Item>Prix Emplacement Premium</ListGroup.Item>
                <ListGroup.Item>Prix Emplacement Standard</ListGroup.Item>
                <ListGroup.Item>Prix Emplacement Promo</ListGroup.Item>
                <ListGroup.Item>Nombre de m²</ListGroup.Item>
                <ListGroup.Item>Nombre de m² buvette</ListGroup.Item>
                <ListGroup.Item>Nombre d'emplacement Premium</ListGroup.Item>
                <ListGroup.Item>Nombre d'emplacement Standard</ListGroup.Item>
                <ListGroup.Item>Nombre d'emplacement Standard</ListGroup.Item>
            </ListGroup>
          </div>

        
        
    )
}

export default Festival