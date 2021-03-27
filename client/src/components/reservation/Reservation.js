import React, { useState } from 'react';
import './Reservation.css'

const Reservation = (props) => {

    function dateFormat(date) {
        return date ? date.slice(0, 10) :null;
    }

    var nom_exposant = props.datas.nom_exposant
    var date_reservation = dateFormat(props.datas.date_reservation)
    var prix_prestation = props.datas.prix_prestation
    var date_emision_facture = dateFormat(props.datas.date_emision_facture)
    var date_paiement_facture = dateFormat(props.datas.date_paiement_facture)
    var libelle_etat_reservation = props.datas.libelle_etat_reservation

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

    return (
        <tr className={rowCss}>
            <td>{nom_exposant}</td>
            <td>{date_reservation}</td>
            <td>{prix_prestation} €</td>
            <td>{date_emision_facture}</td>
            <td>{date_paiement_facture}</td>
        </tr>
    );
};

export default Reservation;