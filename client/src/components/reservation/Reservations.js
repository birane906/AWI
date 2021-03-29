import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';
import Reservation from './Reservation';

const Reservations = () => {
    const [ reservations, setReservations ] = useState([]);
    const [ displayedReservations, setDisplayedReservations ] = useState([])

    function loadReservations() {
        axios.get('/api/reservations')
            .then(res => {
                const resData = res.data.map(value => {
                    for (const [key, val] of Object.entries(value)) {
                        val == null ? value[key] = "" : value[key] = val.toString();
                    }
                    return value
                })
                setReservations(resData)
                setDisplayedReservations(resData)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => loadReservations(), [])

    const [ orderNom_exposant, setOrderNom_esposant] = useState(1)
    const [ orderDate_reservation, setOrderDate_reservation] = useState(1)
    const [ orderPrix_prestation, setOrderPrix_prestation] = useState(1)
    const [ orderDate_emision_facture, setOrderDate_emision_facture] = useState(1)
    const [ orderDate_paiment_facture, setOrderDate_paiment_facture] = useState(1)

    const sortBy = (key, order, setOrder) => {
        const newDisplay = [...displayedReservations]
        newDisplay.sort((a, b) => {
            if (a[key].toUpperCase() > b[key].toUpperCase()) {
                return order
            }
            
            return -order
        })
        setDisplayedReservations(newDisplay)
        setOrder(-1 * order)
    }

    const [ editState, setEditState ] = useState(false)

    return (
        <div>
            <h1>Réservations</h1>
            <Button variant={!editState ? "primary" : "secondary "} className="m-2" onClick={() => setEditState(!editState)}>
                {!editState ? "Enregistrer" : "En cours... "}
            </Button>
            <div className={"m-2"}>
                <Table striped bordered hover size="sm" responsive="md" style={{margin: 0}}>
                    <thead>
                        <tr>
                            <th onClick={() => sortBy("nom_exposant", orderNom_exposant, setOrderNom_esposant)}>Exposant</th>
                            <th onClick={() => sortBy("date_reservation", orderDate_reservation, setOrderDate_reservation)}>Date de réservation</th>
                            <th onClick={() => sortBy("prix_prestation", orderPrix_prestation, setOrderPrix_prestation)}>Prix de la réservation</th>
                            <th onClick={() => sortBy("date_emision_facture", orderDate_emision_facture, setOrderDate_emision_facture)}>Date d'émission de la facture</th>
                            <th onClick={() => sortBy("date_paiment_facture", orderDate_paiment_facture, setOrderDate_paiment_facture)}>Date de paiement de la facture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            displayedReservations.map((value, index) => {
                                return <Reservation datas={value} key={index}/>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Reservations;