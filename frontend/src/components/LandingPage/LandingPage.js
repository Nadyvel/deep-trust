import React, {useState} from "react";
import {connect} from "react-redux";
import {psychologistsAction} from '../../store/action/psychologistsAction';
import './LandingPage.css';
import {useEffect} from "react";
import RegistrationModal from '../RegistrationModal/RegistrationModal';
import {setModal} from "../../store/action/modalAction";
import LoginModal from '../LoginModal/LoginModal';
import Psychologists from '../Psychologists/Psychologists';
import Header from "../Header/Header";

const LandingPage = (props) => {
    let [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        props.dispatch(psychologistsAction());
    }, []);

    const handleSidebar = (e) => {
        e.preventDefault();
        setShowSidebar(!showSidebar);
    };

    const handdleMoreDoctors = (e) => {
        e.preventDefault();
        props.history.push('/doctorList');
    };

    const handdleAbout = (e) => {
        e.preventDefault();
        document.getElementById('middleContainer').scrollIntoView();
        
    };

    const handdleContact = (e) => {
        e.preventDefault();
        document.getElementById('downContainer').scrollIntoView();
    };

    const handdleProfile = (e) => {
        e.preventDefault();
        props.history.push('/userprofile');
    };

    const handleOpen = (namespace) => props.dispatch(setModal(namespace, null, true));

    let sideBarClassName = '';
    if (showSidebar){
        sideBarClassName = 'sidebarBox sidebarVisible';
    } else {
        sideBarClassName = 'sidebarBox';
    }

    let sidebarToggle = '';
    if (showSidebar) {
        sidebarToggle = 'sidebarToggle sidebarToggleVisible';
    } else {
        sidebarToggle = 'sidebarToggle';
    }

    let newList = props.psychologists.slice(0, 3);
    
    return (
        <div className='landingPage'>
            <Header/>

            <div className={sideBarClassName}>{showSidebar}
                <p className='sidebarText' onClick={(e) => handdleAbout(e)}>About us</p>
                {!props.authenticated && <p className='sidebarText' type='submit' onClick={() => handleOpen("RegistrationModal")}>Sign up</p>}
                {!props.authenticated && <p className='sidebarText' type='submit' onClick={() => handleOpen("LoginModal")}>Login</p>}
                <p className='sidebarText' onClick={(e) => handdleMoreDoctors(e)}>Psychologists List</p>
                <p className='sidebarText' onClick={(e) => handdleContact(e)}> Contact</p>

                {props.authenticated && <p className='sidebarText' onClick={(e) => handdleProfile(e)}> Profile</p>}
            </div>            

            <RegistrationModal />
            <LoginModal />

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

                <div className='rightMiddleImage' id='middleContainer'>
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
            
            <div className='parallax2' id='downContainer'>
                <div className="squareInfo">
                    <div className='tittleQustions'>
                        <p id="text2">
                            More questions?
                        </p>
                    </div>
                    <div>
                        <form className='inputQuestionsForm'>
                            <input className='qustionaryInput' placeholder={'Name'} name='name'  />
                            <input className='qustionaryInput' placeholder={'Email'} name='email' />
                            <textarea className='qustionaryInputText' placeholder={'Comments'} name='comments' />
                            <button className='qustionaryButton'>Submit</button>
                        </form>
                    </div>
                </div> 
            </div>
        </div>    
    );
};

const mapStateToProps = state => {
    return {
        psychologists: state.psychologistsReducer.psychologists,
        authenticated: state.loginReducer.authenticated
    };
};

export default connect(mapStateToProps)(LandingPage);

