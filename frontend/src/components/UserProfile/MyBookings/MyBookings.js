import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { UserMyBookings } from '../../../store/action/userAction'
import MyBookingCards from './MyBookingCards/MyBookingCards'
import './MyBookings.css'

const MyBookings = (props) => {
    useEffect(() => {
        props.dispatch(UserMyBookings())
    },[])

    return (

        <>
        <div className='myBookings-title'>
            <h1>MY BOOKINGS</h1>
        </div>
        <div className='myBookings-container'>
            <div className='myBookings-labels-container'>
                <div className='myBookings-labels'>Last Name</div>
                <div className='myBookings-labels'>First Name</div>
                <div className='myBookings-labels'>Email</div>
            </div>
            <div className="myBookings-card-container">
                {props.myBookings && props.myBookings.map((myBooking, index) => {
                    return <MyBookingCards key={index} myBooking={myBooking}/>
                })}
            </div>
        </div>
        </>

    )
}

const mapStateToProps = (state, props) => {
    return {
        myBookings: state.userReducer.myBookings
    }
}
export default connect(mapStateToProps)(MyBookings)