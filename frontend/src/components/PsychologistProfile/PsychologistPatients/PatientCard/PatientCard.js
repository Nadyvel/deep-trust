import React from 'react'
import {Link} from "react-router-dom";

const PatientCard = (props) => {


    return (
        <div className="patient-cards-container">
            <Link style={
                {
                    display: 'flex',
                    width:'100%',
                    justifyContent:'space-around',
                    textDecoration:'none',
                    fontSize:'17px',
                    fontWeight:'lighter',
                    color:'navy',
                }
            } to={{pathname: `/psychologist/me/patient-details/${props.patient.id}`, patient: props.patient }}>
                <div className='patient-card-content'>{props.patient.first_name}</div>
                <div className='patient-card-content'>{props.patient.last_name}</div>
                <div className='patient-card-content'>{props.patient.email}</div>
            </Link>
        </div>
    )
}

export default PatientCard;