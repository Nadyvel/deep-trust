import React, {useState} from "react";
import {connect} from "react-redux";
import {psychologistsAction} from '../../store/action/psychologistsAction';
import './LandingPage.css';
import {useEffect} from "react"
// import RegistrationModal from '../RegistrationModal/RegistrationModal'
// import {setModal} from "../../store/action/modalAction";
// import LoginModal from '../LoginModal/LoginModal';
import Psychologists from '../Psychologists/Psychologists'

const LandingPage = (props) => {
    let [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        props.dispatch(psychologistsAction())
    }, []);

    const handleSidebar = (e) => {
        e.preventDefault();
        setShowSidebar(!showSidebar)
    };

    let sideBarClassName = ''
    if (showSidebar){
        sideBarClassName = 'sidebarBox sidebarVisible'
    } else {
        sideBarClassName = 'sidebarBox'
    }

    return (
        <div className='landingPage'>

            <div className={sideBarClassName}>{showSidebar}</div>            

            <p className='line'></p>
            <div className='parallax1'>
                
                <div className="layer">
                <button onClick={(e) => handleSidebar(e)}>Display sidebar</button>
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

