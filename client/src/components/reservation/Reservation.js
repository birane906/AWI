import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Form } from "react-bootstrap"
import './Reservation.css'

const Reservation = (props) => {

    const history = useHistory()

    function dateFormat(date) {
        return date ? date.slice(0, 10) :null;
    }

    const [ valReservation, setValReservation ] = useState({
        nom_exposant : props.datas.nom_exposant,
        date_reservation : dateFormat(props.datas.date_reservation),
        prix_prestation : props.datas.prix_prestation,
        date_emision_facture : dateFormat(props.datas.date_emision_facture),
        date_paiment_facture : dateFormat(props.datas.date_paiment_facture),
        libelle_etat_reservation : props.datas.libelle_etat_reservation,
        id_festival : props.datas.id_festival,
    })

    var rowCss = null

    switch (valReservation.libelle_etat_reservation) {
        case "Validé":
            rowCss = "validated" 
            break;

        case "Annulé":
            rowCss = "canceled" 
            break;

        default:
            rowCss = "unknown" 
            break;
    }

    const handleValReservationChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log(name, value);
        const newValReservation = {
            ...valReservation,
            [name]: value
        }
        setValReservation(newValReservation)
    }

    const handleRowClick = () => {
        history.push(`/dashboard/reservations/${valReservation.nom_exposant}&id_festival=${valReservation.id_festival}`)
    }

    if (props.editState) {
        return(
            <tr className={rowCss}>
                <td className="tdEditor">
                    <Form.Control name="nom_exposant" value={valReservation.nom_exposant} onChange={handleValReservationChange}/>
                </td>
                <td className="tdEditor">
                    <Form.Control name="date_reservation" value={valReservation.date_reservation} onChange={handleValReservationChange}/>
                </td>
                <td className="tdEditor">
                    <Form.Control name="prix_prestation" value={valReservation.prix_prestation} onChange={handleValReservationChange}/>
                </td>
                <td className="tdEditor">
                    <Form.Control name="date_emision_facture" value={valReservation.date_emision_facture} onChange={handleValReservationChange}/>
                </td>
                <td className="tdEditor">
                    <Form.Control name="date_paiment_facture" value={valReservation.date_paiment_facture} onChange={handleValReservationChange}/>
                </td>
            </tr>
        )
    }
    else {
        return (
            <tr className={rowCss} onClick={handleRowClick}>
                <td>{valReservation.nom_exposant}</td>
                <td>{valReservation.date_reservation}</td>
                <td>{valReservation.prix_prestation ? `${valReservation.prix_prestation} €` : null}</td>
                <td>{valReservation.date_emision_facture}</td>
                <td>{valReservation.date_paiment_facture}</td>
            </tr>
        );
    }
};

export default Reservation;