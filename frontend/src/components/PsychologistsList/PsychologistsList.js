import React, {useState} from "react";
import {connect} from "react-redux";
import {psychologistsAction} from '../../store/action/psychologistsAction';
import './PsychologistsList.css';
import {useEffect} from "react"
// import RegistrationModal from '../RegistrationModal/RegistrationModal'
// import {setModal} from "../../store/action/modalAction";
// import LoginModal from '../LoginModal/LoginModal';
import Psychologists from '../Psychologists/Psychologists'

const PsychologistsList = (props) => {

    return (
        <>
            <div className='psychologistsContainer'>
                <p className='psychoList'>People you can trust</p>
                <Psychologists psychologists={props.psychologists}/>
            </div>
        </>
    )

}

const mapStateToProps = state => {
    return {
        psychologists: state.psychologistsReducer.psychologists
    };
};

export default connect(mapStateToProps)(PsychologistsList);