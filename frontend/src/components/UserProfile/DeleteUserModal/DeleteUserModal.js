import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom';
import Modal from '../../Modal/Modal';
import {setModal} from '../../../store/action/modalAction';
import DeleteUser from '../DeleteUser/DeleteUser';

const namespace = "DeleteUserModal";
const DeleteUserModal = ({isVisible, data, dispatch, history}) => {
 
    const handleClose = () => {
        dispatch(setModal(namespace, null, false));
        history.push("/userprofile/settings");
    };

    useEffect(() => {
       
    });
   
    return (
        <>
            { isVisible &&
                <Modal close={handleClose}>
                   
            {data.activePage === "deleteUser" && <DeleteUser/> }

                <Router>
                    <Route exact path='/deleteUser' component={DeleteUser}/>
                    <Redirect from="settings" to="/deleteUser" />
                 </Router>
                    
                </Modal>  
            }
        </> 
    );
};

const mapStateToProps = state => {
    return {
      isVisible: state.modalReducer[namespace].isVisible,
      data: state.modalReducer[namespace].data
    };
};

export default withRouter(connect(mapStateToProps)(DeleteUserModal));