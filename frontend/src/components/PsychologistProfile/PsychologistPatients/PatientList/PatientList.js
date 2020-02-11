import React from 'react'
import PatientCard from "../PatientCard/PatientCard";
import '../PatientCard/PatientCard.css'

const PatientList = (props) => {
    console.log('in da list', props)
    return (
        <>
        <div className='patient-card-title'>
            <h1>MY PATIENTS</h1>
        </div>
        <div className='patients-container'>
        <div className='patient-labels-container'>
            <div className='patient-labels'>Last name</div>
            <div className='patient-labels'>First name</div>
            <div className='patient-labels'>Email</div>
        </div>
        <div className="patient-card-container">
            {props.patientCards && props.patientCards.map((patient, index) => {
                return <PatientCard patient={patient}/>
            })}
        </div>
        </div>
            </>
    )
}

export default PatientList