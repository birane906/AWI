import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './Reservation.css'
import { Form } from 'react-bootstrap';

const Reservation = (props) => {

    const history = useHistory()

    function dateFormat(date) {
        return date ? new Date(date) :null;
    }

    const valReservation = {
        nom_exposant : props.datas.nom_exposant,
        date_reservation : dateFormat(props.datas.date_reservation),
        prix_prestation : props.datas.prix_prestation,
        date_emision_facture : dateFormat(props.datas.date_emision_facture),
        date_paiment_facture : dateFormat(props.datas.date_paiment_facture),
        libelle_etat_reservation : props.datas.libelle_etat_reservation,
        id_festival : props.datas.id_festival,
    }

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

    const handleValReservationChange = props.onChange

    const handleRowClick = () => {
        history.push(`/dashboard/reservations/${valReservation.nom_exposant}&id_festival=${valReservation.id_festival}`)
    }

    return(
        <tr className={rowCss}>
            <td style={{cursor: "pointer"}} onClick={handleRowClick}>{valReservation.nom_exposant}</td>
            <td className="tdEditor">
                <DatePicker selected={valReservation.date_reservation} onChange={date => handleValReservationChange(date, "date_reservation", props.index)} />
            </td>
            <td>{valReservation.prix_prestation ? `${valReservation.prix_prestation} €` : null}</td>
            <td className="tdEditor">
                <DatePicker selected={valReservation.date_emision_facture} onChange={date => handleValReservationChange(date, "date_emision_facture", props.index)} />
            </td>
            <td className="tdEditor">
                <DatePicker selected={valReservation.date_paiment_facture} onChange={date => handleValReservationChange(date, "date_paiment_facture", props.index)} />
            </td>
            <td>
                <Form.Control as="select" value={valReservation.libelle_etat_reservation} onChange={e => handleValReservationChange(e.target.value, "libelle_etat_reservation", props.index)}>
                    {
                        Object.keys(props.allEtat).map((value, index) => {
                            return <option key={index}>{value}</option>
                        })
                    }
                    <option style={{display: "none"}} disabled value=""></option>
                </Form.Control>
            </td>
        </tr>
    )
};

export default Reservation;