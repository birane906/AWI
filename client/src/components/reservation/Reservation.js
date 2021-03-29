import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './Reservation.css'

const Reservation = (props) => {

    const history = useHistory()

    function dateFormat(date) {
        return date ? new Date(date.slice(0, 10)) :null;
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

    const handleValReservationChange = (value, name) => {
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

    return(
        <tr className={rowCss}>
            <td style={{cursor: "pointer"}} onClick={handleRowClick}>{valReservation.nom_exposant}</td>
            <td className="tdEditor">
                <DatePicker selected={valReservation.date_reservation} onChange={date => handleValReservationChange(date, "date_reservation")} />
            </td>
            <td>{valReservation.prix_prestation ? `${valReservation.prix_prestation} €` : null}</td>
            <td className="tdEditor">
                <DatePicker selected={valReservation.date_emision_facture} onChange={date => handleValReservationChange(date, "date_emision_facture")} />
            </td>
            <td className="tdEditor">
                <DatePicker selected={valReservation.date_paiment_facture} onChange={date => handleValReservationChange(date, "date_paiment_facture")} />
            </td>
        </tr>
    )
};

export default Reservation;