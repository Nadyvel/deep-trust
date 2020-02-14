import React from 'react';
import {withRouter} from 'react-router-dom';

const BookingMessage = props => {
    return(
        <div className='mainContainer2'>
            <div className='messageContainer'>
                <h5 className='loginTitle'>Your appointment has been successfully booked.</h5>
            </div>
            <div className='inputContainer'>
                <button type='submit' onClick={props.handleClose} className='buttonUserRegistration'>Ok</button>        
            </div>
        </div>
    );
};

export default withRouter(BookingMessage);
