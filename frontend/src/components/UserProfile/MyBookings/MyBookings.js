import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { UserMyBookings } from '../../../store/action/userAction'
import MyBookingCards from './MyBookingCards/MyBookingCards'

const MyBookings = (props) => {
    console.log('props', props)

    useEffect(() => {
        props.dispatch(UserMyBookings())
    },[])

    return (

        <>
        <div className='myBookings-title'>
            <h1>MY PATIENTS</h1>
        </div>
        <div className='myBookings-container'>
            <div className='myBookings-labels-container'>
                <div className='myBookings-labels'>Last name</div>
                <div className='myBookings-labels'>First name</div>
                <div className='myBookings-labels'>Email</div>
            </div>
            <div className="myBookings-card-container">
                {props.myBookings && props.myBookings.map((myBooking, index) => {
                    return <MyBookingCards myBooking={myBooking}/>
                })}
            </div>
        </div>
        </>

    )
}

const mapStateToProps = (state, props) => {
    console.log('state', state)
    return {
        myBookings: state.userReducer.myBookings
    }
}
export default connect(mapStateToProps)(MyBookings)