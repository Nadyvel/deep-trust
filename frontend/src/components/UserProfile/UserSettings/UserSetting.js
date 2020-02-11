import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './UserSettings.css';
import {withRouter} from 'react-router-dom';
import {userUpdateProfile} from '../../../store/action/userAction';

const UserSettings = (props) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const initialState = {
            first_name: '',
            last_name: '',
            // email: '',
            username: '',
            location: '',
            description: '',
        };
        setData(initialState);
    }, []);

    const handleChange = e => {
        const name = e.target.name;
        const val = e.target.value;
        setData({ ...data, [name]: { ...data[name], value: val } });
    };

    const handleUpdate = async e => {
        e.preventDefault();
        const updateData = {};  // where I will store the new data
        Object.keys(data).forEach(key => {
            return ( !data[key] ? updateData[key] = props.userProfile[key] : 
            updateData[key] = data[key].value);
        }); 
     
        try {
            await props.dispatch(userUpdateProfile(updateData));
            props.history.push('/userprofile');
        } catch (err) {
            // nothing for now
        }
    };


    if(props.userProfile.email){
        return (
        <div className='user-settings'>
            <div className='user-settings-title'>
                <h1 className='profile-update-title'>Update your profile</h1>
            </div>

            <form className='update-form' onSubmit={handleUpdate}>

                {/* <input className='update-input' name='image'
                    value={props.userProfile.image} onChange={handleChange}/> */}
                <div>
                <label className='update-label'>First Name</label>
                <input className='update-input' name="first_name" type='text'
                    defaultValue={props.userProfile.first_name} onChange={handleChange}/>
                </div>

                <div>
                <label className='update-label'>Last Name</label>
                <input className='update-input' name="last_name" type='text'
                    defaultValue={props.userProfile.last_name} onChange={handleChange}/>
                </div>

                {/* <div>
                <label className='update-label'>Email</label>
                <input className='update-input' name="email" type='text'
                    defaultValue={props.userProfile.email} onChange={handleChange}/>
                </div> */}

                <div>
                <label className='update-label'>Username</label>
                <input className='update-input' name="username" type='text'
                    defaultValue={props.userProfile.username} onChange={handleChange}/>
                </div>

                {/* <div>
                <label className='update-label'>Password</label>
                <input className='update-input' name="password" type='password'
                    defaultValue={props.userProfile.password} onChange={handleChange} />
                </div> */}

                <div>
                <label className='update-label'>Location</label>
                <input className='update-input'  name="location" type='text'
                    defaultValue={props.userProfile.location} onChange={handleChange} />
                </div>

                <div>
                <label className='update-label'>Description</label>
                <input className='update-input'  name="description" type='text'
                    defaultValue={props.userProfile.description} onChange={handleChange} />
                </div>

                <button className='save-button' type="submit" content="Save">Save</button>

            </form>
        </div>
        );
}
    else
        return(<div className='loading'>Loading</div>);
};

const mapStateToProps = state => {
    return {
        userProfile: state.userReducer.userProfile,
    };
};

export default connect(mapStateToProps)(withRouter(UserSettings));
