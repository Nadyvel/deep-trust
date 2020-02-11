import React from 'react'
import {Link} from "react-router-dom";

const PatientCard = (props) => {


    return (
        <div className="patient-cards-container">
            <Link style={{textDecoration:'none', fontSize:'20px', fontWeight:'light', color:'navy'}} to={{pathname: `/psychologist/me/patient-details/${props.patient.id}`, patient: props.patient }}>
                <h6>{props.patient.first_name} {props.patient.last_name} {props.patient.email} {props.patient.birth_date}</h6>
            </Link>
        </div>
    )
}

export default PatientCard;