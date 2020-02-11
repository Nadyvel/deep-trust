import React from 'react'
import { Link } from 'react-router-dom'
// import Lobby from '../../../TwilioVideo/Lobby'


const PsychologistAppointmentDetails = (props) => {
    console.log('details', props)

    return (
    <>
        <h1>Appointment Details</h1>
        <div className="myAppointments-details-container">
            <p className='myAppointments-detail'>{props.location.myAppointment.user.username}</p>
            <p className='myAppointments-detail'>{props.location.myAppointment.user.email}</p>
            <p className='myAppointments-detail'>Email: {props.location.myAppointment.date}</p>
            <p className='myAppointments-detail'>Birth date: {props.location.myAppointment.time_in_str}</p>
        </div>
        <div className="video-chat-container">
            <Link to={{pathname: '/video', data: props.location.myAppointment, is_psychologist: true}}>Video Link here</Link>>
        </div>
    </>
    )
}

export default PsychologistAppointmentDetails