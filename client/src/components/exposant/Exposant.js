import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './Exposant.css'

const Exposant = (props) => {

    const history = useHistory()

    function dateFormat(date) {
        return date ? new Date(date) :null;
    }

    const valExposant = {
        id_exposant : props.datas.id_exposant,
        nom_exposant : props.datas.nom_exposant
    }

    var rowCss = null

    const handleValExposantChange = props.onChange

    const handleRowClick = () => {
        history.push(`/dashboard/exposants/${valExposant.nom_exposant}&id_exposant=${valExposant.id_exposant}`)
    }

    return(
        <tr className={rowCss}>
            <td style={{cursor: "pointer"}} onClick={handleRowClick}>{valExposant.nom_exposant}</td>
            
        </tr>
    )
};

export default Exposant;