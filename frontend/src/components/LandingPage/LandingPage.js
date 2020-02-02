import React, {useState} from "react";
import {connect} from "react-redux";
import {psychologistsAction} from '../../store/action/psychologistsAction';
import './LandingPage.css';
import {useEffect} from "react"
import RegistrationModal from '../RegistrationModal/RegistrationModal'
import {setModal} from "../../store/action/modalAction";
import LoginModal from '../LoginModal/LoginModal';
import Psychologists from '../Psychologists/Psychologists'

const LandingPage = (props) => {
    useEffect(() => {
        props.dispatch(psychologistsAction())
    }, []);

    // const handleOpen = (namespace) => props.dispatch(setModal(namespace, null, true));
    

    return (
        <div className='landingPage'>
            {/* <button type='submit' onClick={() => handleOpen("RegistrationModal")}>Sign up</button>
            <button type='submit' onClick={() => handleOpen("LoginModal")}>Login</button>
          
            <RegistrationModal />
            <LoginModal /> */}

          <p className='line'></p>
            <div className='parallax1'>
                <div className="layer">
                    <p id="text">
                        DEEP TRUST
                    </p>
                </div> 
            </div>

            <div className='middleImageContainer'>
                <div className='leftMiddleImage'>

                </div>

                <div className='rightMiddleImage'>
                        <span id="textMiddleImage">
                            About deep trust
                        </span>
                </div>
            </div>

            <div className='psychologistsContainer'>
                <p className='psychoList'>People you can trust</p>
                <Psychologists psychologists={props.psychologists}/>
            </div>

            
            <div className='parallax2'>
                <div className="squareInfo">
                    <p id="text2">
                        More about Deep  TRUST
                    </p>
                </div> 
            </div>
        </div>    
    )
}

const mapStateToProps = state => {
    return {
        psychologists: state.psychologistsReducer.psychologists
    };
};

export default connect(mapStateToProps)(LandingPage);

