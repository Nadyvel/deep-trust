import React, { useState } from 'react'
import './BookingCalendar.css'
import 'react-calendar/dist/Calendar.css';

import Calendar from './Calendar'

const BookingCalendar = (props) => {
    return (
        <>
        <div className='booking-psychologist-name-warp'>
            <img src={props.location.psychologist.image} className="booking-psychologist-image" alt={`${props.location.psychologist.first_name} ${props.location.psychologist.last_name}`} />
        <p className='psychologistName'>{props.location.psychologist.first_name} {props.location.psychologist.last_name} </p>
    </div>
        <div className="booking-psychologist-container">
        
        <div className='booking-psychologist-information-wrapper'>
            <p className='psychologistEmail'>Country: {props.location.psychologist.country}</p>
            <p className='psychologistBirthDate'>City: {props.location.psychologist.city}</p>
            <p className='psychologistProblemDescription'>ZIP: {props.location.psychologist.zip}</p>
        </div>

        <div className='booking-psychologist-work-info-wrapper'>
            <p className='psychologistSpecialNotes'>Working hour: {props.location.psychologist.working_hours}</p>
            <p className='psychologistTodosNotes'>Price per hour: {props.location.psychologist.price_per_hour}</p>
        </div>

        <Calendar />

        </div>
        </>
    )
}

export default BookingCalendar