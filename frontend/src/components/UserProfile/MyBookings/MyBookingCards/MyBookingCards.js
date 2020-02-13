import React from 'react'
import { Link } from 'react-router-dom'

const MyBookingCards = (props) => {
    return (

        <div className="myBooking-cards-container">
            <Link style={
                {
                    display: 'flex',
                    width:'100%',
                    justifyContent:'space-around',
                    textDecoration:'none',
                    fontSize:'17px',
                    fontWeight:'lighter',
                    color:'navy',
                }
            } to={{pathname: `/userprofile/myBookings/details/${props.myBooking.id}`, myBooking: props.myBooking }}>
                <div className='myBooking-card-content'>{props.myBooking.psychologist_first_name}</div>
                <div className='myBooking-card-content'>{props.myBooking.psychologist_last_name}</div>
                <div className='myBooking-card-content'>{props.myBooking.date}</div>
            </Link>
        </div>

    )
}

export default MyBookingCards