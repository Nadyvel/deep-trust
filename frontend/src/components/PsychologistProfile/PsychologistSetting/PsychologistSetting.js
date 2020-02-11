import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const PsychologistSetting = (props) => {
   
    return (
        
        <div className='user-settings'>
            <div className='user-settings-title'>
                <h1 className='profile-update-title'>Update your profile</h1>
            </div>
        
            <form className='update-form' >

                {/* <div className='user-settings-image-styling'>
                    <div className='bold'>Image</div>
                    {props.myProfile.psychologists.image}
                </div> */}
            
                <div>
                    <label className='update-label'>First Name</label>
                    <input className='update-input' name="first_name" type='text'
                    defaultValue={props.myProfile.psychologists.first_name}/>
                </div>

                <div>
                    <label className='update-label'>Last Name</label>
                    <input className='update-input' name="last_name" type='text'
                    defaultValue={props.myProfile.psychologists.last_name} />
                </div>

                {/* <div>
                    <label className='update-label'>Username</label>
                    <input className='update-input' name="username" type='text'
                    defaultValue={props.myProfile.username} />
                </div> */}

                <div className='LocationData'>
                    <div>
                        <label className='update-label'>Country</label>
                        <input className='update-input-country' name="country" type='text'
                        defaultValue={props.myProfile.psychologists.country}/>
                    </div>

                    <div>
                        <label className='update-label'>City</label>
                        <input className='update-input-city' name="city" type='text'
                        defaultValue={props.myProfile.psychologists.city}/>
                    </div>
                </div>

                {/* <div>
                    <label className='update-label'>ZIP</label>
                    <input className='update-input' name="zip" type='text'
                    defaultValue={props.myProfile.psychologists.zip}/>
                </div> */}

                <div>
                    <label className='update-label'>Description</label>
                    <input className='update-input' name="description" type='text'
                    defaultValue={props.myProfile.psychologists.description}/>
                </div>

                <div>
                    <label className='update-label'>Working Hours</label>
                    <input className='update-input' name="working_hours" type='text'
                    defaultValue={props.myProfile.psychologists.working_hours}/>
                </div>

                <div>
                    <label className='update-label'>Price per Hour</label>
                    <input className='update-input' name="price_per_hour" type='text'
                    defaultValue={props.myProfile.psychologists.price_per_hour}/>
                </div>

                <button className='save-button' type="submit" content="Save">Save</button>

            </form>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return{
        myProfile: state.psychologistsReducer.myProfile
    };
};

export default connect(mapStateToProps)(withRouter(PsychologistSetting));