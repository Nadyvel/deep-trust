import React, { useState } from 'react'
import CalendarReact from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'

const Calendar = (props) => {

    const [state, setState] = useState({
        value: new Date()
    })

    const onChange = value => setState({ value })

    // const { value } = state

    // const data = state.value.map((val) => {
    //     return val
    // })

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const data = state.value.toLocaleDateString('en-EN', options).split(" ")
    console.log('state', data)

    return (
        <>
        <div className="booking-calendar-container">
            <div className="booking-calendar-wrapper" >
        <CalendarReact 
        className="calendar"
        onChange={onChange}
        value={state.value}
        onClickDay={console.log(state)}
        tileDisabled={({activeStartDate, date, view }) => date.getDay() === 0}
        />

        <div className="bookingBox">
            <div className="date-wrap">
                <p class="Date">{data[1]} {data[2]} {data[3]}</p>
            </div>
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
        </>
    )
}

export default Calendar