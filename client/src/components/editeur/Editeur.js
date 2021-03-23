import React from 'react'
import './Editeur.css';

const Editeur = (props) => {
    return(
        <div>
            <text> {props.nom_exposant} </text>
            <text> {props.premier_contact} </text>
            <text> {props.deuxieme_contact} </text>
            <text> {props.troisieme_contact} </text>
            <text> {props.est_present.toString()} </text>
            <text> {props.cr_envoye.toString()} </text>
            <text> {props.commentaire} </text>
        </div>
    );
};

export default Editeur
