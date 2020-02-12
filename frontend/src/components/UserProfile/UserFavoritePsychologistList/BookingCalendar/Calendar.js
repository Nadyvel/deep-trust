import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CalendarReact from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
import { GetBookedDatesOfPSychologist } from '../../../../store/action/userAction'

const Calendar = (props) => {
    console.log('calendar', props)

    const [state, setState] = useState({
        value: new Date()
    })

    // useEffect(() => {
    //     props.dispatch(GetBookedDatesOfPSychologist(props.location.psychologist.id, currentDate[0]))
    // },[])

    const onChange = value => setState({ value })
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const monthDayYear = state.value.toLocaleDateString('en-EN', options).split(" ")
    const currentDate = state.value.toISOString().split('T')
    const times = [
        { id: 1, time: '08:00 - 09:30' },
        { id: 2, time: '09:30 - 11:00' },
        { id: 3, time: '13:30 - 15:00' },
        { id: 4, time: '11:00 - 12:30' },
        { id: 5, time: '15:00 - 16:30' },
        { id: 6, time: '16:30 - 18:00' },
        { id: 7, time: '18:00 - 19:30' }
    ];

    const timeFromDatabase = props.bookedDates.map((time, index) => {
        return time.time
    })
    console.log('timeFromDB', timeFromDatabase)

    console.log('state', monthDayYear)
    console.log('currentDate', currentDate[0])

    const datesFromDatabase = props.bookedDates.map((date, index) => {
        return {
            date: date.date,
            time: date.time
        }
    })
    console.log('datesFromDB', datesFromDatabase)

    // datesFromDatabase.map((date) => {
    //     if(currentDate[0] === date.date) {
    //         console.log('HERBERT', date.time)
    //         const res = document.getElementById(date.time)
    //         res.style.color = 'blue'
    //     } 
    //     if(currentDate[0] !== document.getElementById('date_id').date){
    //         const res = document.getElementById(date.time)
    //         res.style.color = 'white'
    //     }
    // })

    const bookNow = "Book now"
    const notAvaialbale = "Not Available"

    const onClickHandler = (event) => {
        console.log('clicked')
    }

    /////////////////////////////////////////////////////////////////////////////
    return (
        <>
        <div className="booking-calendar-container">
            <div className="booking-calendar-wrapper" >
                <CalendarReact 
                    className="calendar"
                    onChange={onChange}
                    value={state.value}
                    minDate={new Date()}
                    tileDisabled={({activeStartDate, date, view }) => date.getDay() === 0}
                />

                <div className="bookingBox">
                    <div className="date-wrap">
                        <p className="Date" id="date_id" date={currentDate[0]}>
                            {monthDayYear[1]} {monthDayYear[2]} {monthDayYear[3]}
                        </p>
                    </div>
                    {times.map(el => {
                            const bookedOut = timeFromDatabase.includes(el.id);
                            console.log(bookedOut)
                            return (
                                <div className='bookingChoices'>
                                    <p className='time' id={el.id}>
                                        {el.time}
                                    </p>
                                    <button
                                        className={bookedOut ? 'bookBtn bookBtnBlocked' : 'bookBtn'}
                                        disabled={bookedOut}
                                        onClick={onClickHandler}
                                    >
                                        {bookedOut ? "Yes" : "No"}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
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

export default connect(mapStateToProps)(Calendar)