import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './Reservation.css'

const Reservation = (props) => {

    const history = useHistory()

    function dateFormat(date) {
        return date ? date.slice(0, 10) :null;
    }

    var nom_exposant = props.datas.nom_exposant
    var date_reservation = dateFormat(props.datas.date_reservation)
    var prix_prestation = props.datas.prix_prestation
    var date_emision_facture = dateFormat(props.datas.date_emision_facture)
    var date_paiment_facture = dateFormat(props.datas.date_paiment_facture)
    var libelle_etat_reservation = props.datas.libelle_etat_reservation
    var id_festival = props.datas.id_festival

    var rowCss = null

    switch (libelle_etat_reservation) {
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

    const handleRowClick = () => {
        history.push(`/dashboard/reservations/${nom_exposant}&id_festival=${id_festival}`)
    }

    return (
        <tr className={rowCss} onClick={handleRowClick}>
            <td>{nom_exposant}</td>
            <td>{date_reservation}</td>
            <td>{prix_prestation ? `${prix_prestation} €` : null}</td>
            <td>{date_emision_facture}</td>
            <td>{date_paiment_facture}</td>
        </tr>
    );
};

export default Reservation;