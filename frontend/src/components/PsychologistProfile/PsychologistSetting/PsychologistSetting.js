import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {psychologistUpdateProfile} from '../../../store/action/psychologistsAction';

const PsychologistSetting = (props) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const initialState = {
            first_name: '',
            last_name: '',
            country: '',
            city: '',
            description: '',
            working_hours: '',
            price_per_hour: '',
        };
        setData(initialState);
    }, []);

    const handdleChange = e => {
        const name = e.target.name;
        const val = e.target.value;
        setData({ ...data, [name]: { ...data[name], value: val } });
    };

    const handdleUpdate = async e => {
        e.preventDefault();
        const updateData = {};  // where I will store the new data
        Object.keys(data).forEach(key => {
            return ( !data[key] ? updateData[key] = props.myProfile.psychologists[key] : 
            updateData[key] = data[key].value);
        }); 
     
        try {
            await props.dispatch(psychologistUpdateProfile(updateData));
            props.history.push('psychologist/me');
        } catch (err) {
            // nothing for now
        }
    };

    return (
        
        <div className='user-settings'>
            <div className='user-settings-title'>
                <h1 className='profile-update-title'>Update your profile</h1>
            </div>
        
            <form className='update-form' onSubmit={handdleUpdate}>

                {/* <div className='user-settings-image-styling'>
                    <div className='bold'>Image</div>
                    {props.myProfile.psychologists.image}
                </div> */}
            
                <div>
                    <label className='update-label'>First Name</label>
                    <input className='update-input' name="first_name" type='text'
                    defaultValue={props.myProfile.psychologists.first_name} onChange={handdleChange}/>
                </div>

                <div>
                    <label className='update-label'>Last Name</label>
                    <input className='update-input' name="last_name" type='text'
                    defaultValue={props.myProfile.psychologists.last_name} onChange={handdleChange}/>
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
                        defaultValue={props.myProfile.psychologists.country} onChange={handdleChange}/>
                    </div>

                    <div>
                        <label className='update-label'>City</label>
                        <input className='update-input-city' name="city" type='text'
                        defaultValue={props.myProfile.psychologists.city} onChange={handdleChange}/>
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
                    defaultValue={props.myProfile.psychologists.description} onChange={handdleChange}/>
                </div>

                <div>
                    <label className='update-label'>Working Hours</label>
                    <input className='update-input' name="working_hours" type='text'
                    defaultValue={props.myProfile.psychologists.working_hours} onChange={handdleChange}/>
                </div>

                <div>
                    <label className='update-label'>Price per Hour</label>
                    <input className='update-input' name="price_per_hour" type='text'
                    defaultValue={props.myProfile.psychologists.price_per_hour} onChange={handdleChange}/>
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