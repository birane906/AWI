import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import Reservation from './Reservation';

const Reservations = () => {
    const [ reservations, setReservations ] = useState([]);

    function loadReservations() {
        axios.get('/api/reservations')
            .then(res => {
                setReservations(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => loadReservations(), [])

    return (
        <div>
            <h1>Réservations</h1>
            <div className={"m-2"}>
                <Table striped bordered hover size="sm" responsive="md" style={{margin: 0}}>
                    <thead>
                        <tr>
                            <th>Exposant</th>
                            <th>Date de réservation</th>
                            <th>Prix de la réservation</th>
                            <th>Date d'émission de la facture</th>
                            <th>Date de paiement de la facture</th>
                        </tr>
                    </thead>
                    {
                        reservations.map((value, index) => {
                            return <Reservation datas={value}/>
                        })
                    }
                </Table>
            </div>
        </div>
    );
};

export default Reservations;