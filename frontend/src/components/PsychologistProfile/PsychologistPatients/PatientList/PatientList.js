import React from 'react'

const PatientList = (props) => {
    console.log('in da list', props)
    return (
        <div className="patient-cards-container">
            <h1>MY PATIENTS</h1>
            {props.patientCards && props.patientCards.map((patient, index) => {
                return <div className="eachPatientProfile" key={index}>
                    <p className='patientName'>{patient.first_name} {patient.last_name} </p>
                    <div className='underLine'></div>
                    <p className='patientEmail'>Email: {patient.email}</p>
                    <p className='patientBirthDate'>Birth date: {patient.birth_date}</p>
                    <p className='patientProblemDescription'>Patient info: {patient.problem_description}</p>
                    <p className='patientSpecialNotes'>Special notes: {patient.special_notes}</p>
                    <p className='patientTodosNotes'>Todo notes: {patient.todos}</p>
                </div>
            })}
        </div>
    )
}

export default PatientList