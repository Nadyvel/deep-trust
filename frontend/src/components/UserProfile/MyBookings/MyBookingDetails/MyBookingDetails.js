import React from 'react'
import { Link } from 'react-router-dom'

/*
Disable "Link" to Video Chat room by comparing
Current Date() with the date from MyBooking.
Upon clicking on "Link" a property "is_patient: true"
Is passed within the "Link" to VideoChat room which
Identifies which User clicked.
*/

const MyBookingDetails = (props) => {
    const date = new Date().toISOString().split('T')
    const hour = new Date().getHours()
    const minute = new Date().getMinutes()

    const rawCallHour = props.location.myBooking.time_in_str
    const callHour = rawCallHour.split(' - ')
    const rawFirstHour = callHour[0].split(':')
    const rawSecondHour = callHour[1].split(':')

    let pointerEvent
    if((date[0] === props.location.myBooking.date) && (rawFirstHour[0] <= hour && hour <= rawSecondHour[0]+1)) {
        pointerEvent = 'auto'
    }
    else {
        pointerEvent = 'none'
    }

    return (
    <>
        <h1>Booking Details</h1>
        <div className="myBookings-details-container">
            <p className='myBooking-detail'>Psychologist Name: {props.location.myBooking.psychologist_first_name} {props.location.myBooking.psychologist_last_name} </p>
            <p className='myBooking-detail'>Date of Meeting: {props.location.myBooking.date}</p>
            <p className='myBooking-detail'>Time of Meeting: {props.location.myBooking.time_in_str}</p>
        </div>
        <div className="video-chat-container">
            <Link className="videoLink" to={{pathname: '/video', data: props.location.myBooking, is_patient: true}} style={{textDecoration: 'none', pointerEvents: 'auto' }}>
                Video Link here
            </Link>
        </div>
    </>
    )
}

export default MyBookingDetails