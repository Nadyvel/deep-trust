import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { GetAllPatientCards } from '../../../store/action/psychologistsAction'

import PatientList from './PatientList/PatientList'

const PsychologistPatients = (props) => {
    console.log('patient props', props)

    useEffect(() => {
        props.dispatch(GetAllPatientCards())
    },[])

    return (
        <PatientList patientCards={props.patientCards}/>
    )
}

const mapStateToProps = (state, props) => {
    console.log('patient state', state)
    return {
        patientCards: state.psychologistsReducer.patientCards
    }
}

export default connect(mapStateToProps)(withRouter(PsychologistPatients))