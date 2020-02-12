import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './BookingCalendar.css'
import 'react-calendar/dist/Calendar.css';

import Calendar from './Calendar'
import { GetBookedDatesOfPSychologist } from '../../../../store/action/userAction'
//cursor: pointer

const BookingCalendar = (props) => {
    console.log('BC props', props)

    useEffect(() => {
        props.dispatch(GetBookedDatesOfPSychologist(props.location.psychologist.id))
    },[])

    console.log(props)
    return (
        <>
        <div className="booking-psychologist-container">
        <div className="information-contianer-wrapper">   
        <div className='booking-psychologist-name-warp'>
            <img src={props.location.psychologist.image} className="booking-psychologist-image" alt={`${props.location.psychologist.first_name} ${props.location.psychologist.last_name}`} />
        <p className='psychologistName'>{props.location.psychologist.first_name} {props.location.psychologist.last_name} </p>
    </div>
        <div className="information-wrap">
        <div className='booking-psychologist-information-wrapper'>
            <p className='psychologistEmail'>Country: {props.location.psychologist.country}</p>
            <p className='psychologistBirthDate'>City: {props.location.psychologist.city}</p>
        </div>

        <div className='booking-psychologist-work-info-wrapper'>
            <p className='psychologistSpecialNotes'>Working hour: {props.location.psychologist.working_hours}</p>
            <p className='psychologistTodosNotes'>Price per hour: {props.location.psychologist.price_per_hour}</p>
        </div>
        </div>
        <Calendar bookedDates={props.bookedDates}/>
        </div>
        </div>
        </>
    )
}


const mapStateToProps = (state) => {
    console.log('state in da BC',state)
    return {
        bookedDates: state.userReducer.bookedDates
    }
}

export default connect(mapStateToProps)(BookingCalendar)