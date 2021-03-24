import React from 'react'

const Zone = (props) => {
    return(
        <div>
            <text> {props.name_zone} </text>
            <text> {props.name_jeu} </text>
            <text> {props.nom_editeur} </text>
            <text> {props.nb_joueurs_min} </text>
            <text> {props.nb_joueurs_max} </text>
            <text> {props.agemin} </text>
            <text> {props.duree} </text>
            <text> {props.libelle_type} </text>
            <text> {props.place_plan} </text>
            <text> {props.recu} </text>
            <text> {props.anim} </text>
        </div>
    );
};

export default Zone
