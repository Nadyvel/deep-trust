import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CalendarReact from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
import { GetBookedDatesOfPSychologist, CreateNewBooking } from '../../../../store/action/userAction'

const Calendar = (props) => {
    console.log('calendar', props)

    const [state, setState] = useState({
        value: new Date()
    })

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const monthDayYear = state.value.toLocaleDateString('en-EN', options).split(" ")
    const getYear = state.value.getFullYear(options)
    const getMonth = state.value.getMonth()+1
    const getDate = state.value.getDate()
    const date = `${getYear}-${getMonth}-${getDate}`
    const times = [
        { id: 1, time: '08:00 - 09:30' },
        { id: 2, time: '09:30 - 11:00' },
        { id: 3, time: '13:30 - 15:00' },
        { id: 4, time: '11:00 - 12:30' },
        { id: 5, time: '15:00 - 16:30' },
        { id: 6, time: '16:30 - 18:00' },
        { id: 7, time: '18:00 - 19:30' }
    ];

    const onChange = value => setState({ value })

    const timeFromDatabase = props.bookedDates.map((time, index) => {
        return time.time
    })

    useEffect(() => {
        props.dispatch(GetBookedDatesOfPSychologist(props.psychologist, date))
    },[])

    const onClickHandler = (event) => {
        props.dispatch(GetBookedDatesOfPSychologist(props.psychologist, date))
    }

    const onClickBookHandler = (event) => {
        event.preventDefault()
        let timeBtn = event.currentTarget // the button ID
        props.dispatch(CreateNewBooking(date, timeBtn.id, props.psychologist))
        props.history.push('/userprofile/myBookings')
    }

    return (
        <>
        <div className="booking-calendar-container">
            <div className="booking-calendar-wrapper" >
                <CalendarReact 
                    className="calendar"
                    onChange={onChange}
                    value={state.value}
                    minDate={new Date()}
                    onClickDay={onClickHandler}
                    tileDisabled={({activeStartDate, date, view }) => date.getDay() === 0}
                />

                <div className="bookingBox">
                    <div className="date-wrap">
                        <p className="Date">
                            {monthDayYear[1]} {monthDayYear[2]} {monthDayYear[3]}
                        </p>
                    </div>
                    {times.map((el, index)=> {
                            const bookedOut = timeFromDatabase.includes(el.id);
                            console.log(bookedOut)
                            return (
                                <div className='bookingChoices' key={index}>
                                    <p className='time' id={el.id}>
                                        {el.time}
                                    </p>
                                    <button
                                        className={bookedOut ? 'bookBtn bookBtnBlocked' : 'bookBtn'}
                                        id={el.id}
                                        style={{
                                            cursor: bookedOut ? 'none' : 'pointer',
                                            pointerEvents: bookedOut ? 'none' : 'auto'
                                        }}
                                        disabled={bookedOut}
                                        onClick={onClickBookHandler}
                                    >
                                        {bookedOut ? "Full" : "Book"}
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

export default connect(mapStateToProps)(withRouter(Calendar))