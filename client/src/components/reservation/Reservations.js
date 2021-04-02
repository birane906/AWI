import React, { useState, useEffect } from 'react';
import { Alert, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import Reservation from './Reservation';
import './Reservations.css'

const Reservations = () => {
    const [ reservations, setReservations ] = useState([]);
    const [ displayedReservations, setDisplayedReservations ] = useState([])
    const [ allEtat, setAllEtat ] = useState({});

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
        
        axios.get('/api/etat_reservation')
            .then(res => {
                var newEtat = {}
                res.data.forEach(value => {
                    newEtat[value.libelle_etat_reservation] = value.id_etat_reservation
                })
                setAllEtat(newEtat)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => loadReservations(), [])

    const [ orderNom_exposant, setOrderNom_esposant] = useState(1)
    const [ orderDate_reservation, setOrderDate_reservation] = useState(1)
    const [ orderPrix_prestation, setOrderPrix_prestation] = useState(1)
    const [ orderDate_emision_facture, setOrderDate_emision_facture] = useState(1)
    const [ orderDate_paiment_facture, setOrderDate_paiment_facture] = useState(1)
    const [ orderLibelle_etat_reservation, setOrderLibelle_etat_reservation] = useState(1)

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

    const handleValReservationChange = (value, name, index) => {
        console.log(name, value);
        const newValReservation = {
            ...displayedReservations[index],
            [name]: value
        }
        var newDisplayedReservations = [...displayedReservations]
        newDisplayedReservations[index] = newValReservation
        setDisplayedReservations(newDisplayedReservations)
        console.log(displayedReservations[index]);
    }

    const saveEdit = () => {
        setEditState(true)
        setAlertBox(null)
        const currentReservations = [...displayedReservations]
        const oldReservations = [...reservations]
        currentReservations.sort((a, b) => {
            if (a["nom_exposant"].toUpperCase() > b["nom_exposant"].toUpperCase()) {
                return 1
            }
            
            return -1
        })
        oldReservations.sort((a, b) => {
            if (a["nom_exposant"].toUpperCase() > b["nom_exposant"].toUpperCase()) {
                return 1
            }
            
            return -1
        })
        var toUpdate = []

        for (let i = 0; i < oldReservations.length; i++) {
            for (let key of Object.keys(displayedReservations[0])) {
                if (oldReservations[i][key] !== currentReservations[i][key] && currentReservations[i]["id_festival"]) {
                    toUpdate.push(currentReservations[i])
                    break;
                }
            }
        }

        toUpdate = toUpdate.map((val) => {
            return {
                ...val,
                ["id_etat_reservation"]: allEtat[val.libelle_etat_reservation]
            }
        })

        console.log(toUpdate);

        axios.put("/api/reservations", {data: toUpdate})
            .then(res => {
                setAlertBox('success')
                setEditState(false)
            })
            .catch(err => console.log(err))

    }

    const [ alertBox, setAlertBox ] = useState(null)

    return (
        <div className="cards">
            <h1>Réservations</h1>
            <div className="alertBox">
                <Alert show={alertBox != null} onClose={() => setAlertBox(null)} variant={alertBox} dismissible>
                    <p>Changements enregistrés avec succès</p>
                </Alert>
            </div>
            <Button variant={!editState ? "primary" : "secondary "} className="m-2" onClick={saveEdit} disabled={editState}>
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
                            <th onClick={() => sortBy("libelle_etat_reservation", orderLibelle_etat_reservation, setOrderLibelle_etat_reservation)}>Etat de la réservation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            displayedReservations.map((value, index) => {
                                return <Reservation datas={value} key={index} index={index} onChange={handleValReservationChange} allEtat={allEtat}/>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Reservations;