import React from 'react'

const PatientDetails = (props) => {
    console.log('details props',props)
    return (
    <>
        <h1>patient details</h1>
        <div className="patient-details-container">
            <p className='patientName'>{props.location.patient.first_name} {props.location.patient.last_name} </p>
            <div className='underLine'></div>
            <p className='patientEmail'>Email: {props.location.patient.email}</p>
            <p className='patientBirthDate'>Birth date: {props.location.patient.birth_date}</p>
            <p className='patientProblemDescription'>Patient info: {props.location.patient.problem_description}</p>
            <p className='patientSpecialNotes'>Special notes: {props.location.patient.special_notes}</p>
            <p className='patientTodosNotes'>Todo notes: {props.location.patient.todos}</p>
        </div>
    </>
    )
}

export default PatientDetails;