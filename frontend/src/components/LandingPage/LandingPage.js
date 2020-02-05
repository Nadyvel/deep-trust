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

    const handdleMoreDoctors = (e) => {
        e.preventDefault();
        props.history.push('/doctorList')
    }

    let sideBarClassName = ''
    if (showSidebar){
        sideBarClassName = 'sidebarBox sidebarVisible'
    } else {
        sideBarClassName = 'sidebarBox'
    }

    let sidebarToggle = ''
    if (showSidebar) {
        sidebarToggle = 'sidebarToggle sidebarToggleVisible'
    } else {
        sidebarToggle = 'sidebarToggle'
    }

    let newList = props.psychologists.slice(0, 3)
    
    return (
        <div className='landingPage'>

            <div className={sideBarClassName}>{showSidebar}</div>            

            <p className='line'></p>
            <div className='parallax1'>
                
                <div className="layer">

                <div className={sidebarToggle}  onClick={(e) => handleSidebar(e)}>
                    <div className='sidebarLine'></div>
                    <div className='sidebarLine'></div>
                    <div className='sidebarLine'></div>
                </div>

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
                    <Psychologists psychologists={newList}/>
            </div>
            <div className='buttoWrapper'>
                <button className='displayMoreDocs' onClick={(e) => handdleMoreDoctors(e)}>More</button>
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

