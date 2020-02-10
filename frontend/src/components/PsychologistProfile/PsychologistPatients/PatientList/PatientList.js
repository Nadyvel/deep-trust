import React from 'react'
import PatientCard from "../PatientCard/PatientCard";

const PatientList = (props) => {
    console.log('in da list', props)
    return (
        <div className="patient-cards-container">
            <h1>MY PATIENTS</h1>
            {props.patientCards && props.patientCards.map((patient, index) => {
                return <PatientCard patient={patient}/>
            })}
        </div>
    )
}

export default PatientList