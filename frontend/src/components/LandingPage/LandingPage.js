import React, {useState} from "react";
import {connect} from "react-redux";
import {psychologistsAction} from '../../store/action/psychologistsAction';
import './LandingPage.css';
import {useEffect} from "react"
import RegistrationModal from '../RegistrationModal/RegistrationModal'
import {setModal} from "../../store/action/modalAction";



const LandingPage = (props) => {
    useEffect(() => {
        props.dispatch(psychologistsAction())
    }, []);

    
 
    const handleOpen = () => props.dispatch(setModal("RegistrationModal", null, true));

   
    return (
        <div className='landingPage'>
            <button type='submit' onClick={handleOpen}>Register</button>
            <button>Login</button>
         
          <p>Landing page</p>

            <RegistrationModal />
        


        </div>    
    )
}

const mapStateToProps = state => {
    //console.log('mapStateToProps:', state)
    return {
        psychologists: state.psychologistsReducer.psychologists
    };
};

export default connect(mapStateToProps)(LandingPage);

//about
//list of psicologies(best rated)
