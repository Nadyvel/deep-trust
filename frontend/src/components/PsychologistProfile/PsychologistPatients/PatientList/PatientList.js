import React from 'react'
import PatientCard from "../PatientCard/PatientCard";
import '../PatientCard/PatientCard.css'

const PatientList = (props) => {
    console.log('in da list', props)
    return (
        <div className='patient-card-title'>
            <h1>MY PATIENTS</h1>
        </div>,
        <div className="patient-card-container">
            {props.patientCards && props.patientCards.map((patient, index) => {
                return <PatientCard patient={patient}/>
            })}
        </div>
    )
}

export default PatientList