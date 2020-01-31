import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom'
//import {useEffect} from "react";
import Modal from '../Modal/Modal';
import {setModal} from "../../store/action/modalAction";
import Login from '../Login/Login';

const namespace = "LoginModal";
const LoginModal = ({isVisible, data, dispatch, history}) => {
 
    const handleClose = () => {
        dispatch(setModal(namespace, null, false));
        history.push("/");
    };

    useEffect(() => {
       
    })
   
    return (
        <>
            { isVisible &&
                <Modal close={handleClose}>
                   
            {data.activePage === "login" && <Login/> }

                <Router>
                    <Route exact path='/login' component={Login}/>
                    <Redirect from="" to="/login" />
                 </Router>
                    
                </Modal>  
            }
        </> 
    )
}

const mapStateToProps = state => {
    return {
      isVisible: state.modalReducer[namespace].isVisible,
      data: state.modalReducer[namespace].data
    };
};

export default withRouter(connect(mapStateToProps)(LoginModal));