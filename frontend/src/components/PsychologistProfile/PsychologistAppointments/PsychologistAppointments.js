import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { PsychologistMyAppointments } from '../../../store/action/psychologistsAction'
import PsychologistAppointmentCards from '../PsychologistAppointmentCards/PsychologistAppointmentCards'

const PsychologistAppointments = (props) => {

    console.log('props', props)

    useEffect(() => {
        props.dispatch(PsychologistMyAppointments())
    },[])

    return (
        
        <>
        <div className='myAppointments-title'>
            <h1>MY PATIENTS</h1>
        </div>
        <div className='myAppointments-container'>
            <div className='myAppointments-labels-container'>
                <div className='myAppointments-labels'>Last name</div>
                <div className='myAppointments-labels'>First name</div>
                <div className='myAppointments-labels'>Date</div>
                <div className='myAppointments-labels'>Time</div>
            </div>
            <div className="myAppointments-card-container">
                {props.myAppointments && props.myAppointments.map((myAppointment, index) => {
                    return <PsychologistAppointmentCards myAppointment={myAppointment}/>
                })}
            </div>
        </div>
        </>

    )
}

const mapStateToProps = (state, props) => {
    console.log('state', state) 
    return {
        myAppointments: state.psychologistsReducer.myAppointments
    }
}

export default connect(mapStateToProps)(PsychologistAppointments)