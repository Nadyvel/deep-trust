import React from 'react'
import { Link } from 'react-router-dom'
import './PsychologistAppointmentsCards.css'

const PsychologistAppointmentCards = (props) => {
    console.log('card', props)
    return (
        <div className="myAppointments-cards-container">
            <Link style={
                {
                    display: 'flex',
                    width:'100%',
                    justifyContent:'space-around',
                    textDecoration:'none',
                    fontSize:'17px',
                    fontWeight:'lighter',
                    color:'black',
                }
            } to={{pathname: `/psychologist/me/appointments/details/${props.myAppointment.id}`, myAppointment: props.myAppointment }}>
                <div className='myAppointments-card-content'>{props.myAppointment.user.username}</div>
                <div className='myAppointments-card-content'>{props.myAppointment.user.email}</div>
                <div className='myAppointments-card-content'>{props.myAppointment.date}</div>
                <div className='myAppointments-card-content'>{props.myAppointment.time_in_str}</div>
            </Link>
        </div>
    )
}

export default PsychologistAppointmentCards