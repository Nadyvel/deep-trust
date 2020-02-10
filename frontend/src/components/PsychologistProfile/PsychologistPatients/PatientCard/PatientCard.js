import React from 'react'
import PatientDetails from "../PatientDetails/PatientDetails";
import {Link} from "react-router-dom";

const PatientCard = (props) => {


    return (
        <div className="patient-card-container">
            <Link to={{pathname: `/psychologist/me/patient-details/${props.patient.id}`, patient: props.patient }}><h6>{props.patient.first_name} {props.patient.last_name}</h6></Link>
        </div>
    )
}

export default PatientCard;