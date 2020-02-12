import React from 'react'
import { Link } from 'react-router-dom'
import Lobby from '../../../TwilioVideo/Lobby'


const MyBookingDetails = (props) => {
    console.log('details', props)

    return (
    <>
        <h1>Booking Details</h1>
        <div className="myBookings-details-container">
            <p className='myBooking-detail'>{props.location.myBooking.psychologist_first_name} {props.location.myBooking.psychologist_last_name} </p>
            <p className='myBooking-detail'>Email: {props.location.myBooking.date}</p>
            <p className='myBooking-detail'>Birth date: {props.location.myBooking.time_in_str}</p>
        </div>
        <div className="video-chat-container">
            <Link to={{pathname: '/video', data: props.location.myBooking, is_patient: true}}>Video Link here</Link>>
        </div>
    </>
    )
}

export default MyBookingDetails