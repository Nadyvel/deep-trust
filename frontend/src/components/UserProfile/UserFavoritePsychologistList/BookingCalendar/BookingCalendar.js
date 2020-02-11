import React, { useState } from 'react'
import './BookingCalendar.css'
import 'react-calendar/dist/Calendar.css';

import Calendar from './Calendar'

const BookingCalendar = (props) => {


    const [state, setState] = useState({
        value: new Date()
    })

    const onChange = value => setState({ value })

    // const { value } = state

    // const data = state.value.map((val) => {
    //     return val
    // })

    const data = state.value.toDateString().split(" ")
    console.log('state', data)


    console.log('BOOKING', props)
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


        <div className="booking-calendar-container">
            <div className="booking-calendar-wrapper" >
        {/* <CalendarReact
        className="calendar-react"
        onChange={onChange}
        value={state.value}
        onClickDay={console.log(state)}
        /> */}

        <Calendar />

        <div className="bookingBox">
            <h3>{data[1]} {data[2]} {data[3]}</h3>
            <div className="bookingChoices">
                <p className="time">8:00 - 9:30</p> <button className="bookBtn">Book now</button>
            </div>
            <div className="bookingChoices">
                <p className="time">9:30 - 11:00</p> <button className="bookBtn">Book now</button>
            </div>
            <div className="bookingChoices">
                <p className="time">13:30 - 15:00</p> <button className="bookBtn">Book now</button>
            </div>
            <div className="bookingChoices">
                <p className="time">11:00 - 12:30</p> <button className="bookBtn">Book now</button>
            </div>
            <div className="bookingChoices">
                <p className="time">15:00 - 16:30</p> <button className="bookBtn">Book now</button>
            </div>
            <div className="bookingChoices">
                <p className="time">16:30 - 18:00</p> <button className="bookBtn">Book now</button>
            </div>
            <div className="bookingChoices">
                <p className="time">18:00 - 19:30</p> <button className="bookBtn">Book now</button>
            </div>
        </div>
        </div>
        </div>

        </div>
        </>
    )
}

export default BookingCalendar