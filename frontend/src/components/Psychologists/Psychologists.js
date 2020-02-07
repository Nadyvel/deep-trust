import React from 'react';
import {connect} from 'react-redux';
import './Psychologists.css';
import {LikeDocAction} from '../../store/action/psychologistsAction';


const Psychologists = props => {
   
    const handleLike = (doctor) => {
        props.dispatch(LikeDocAction(doctor.id));
        console.log(doctor.id);
    };
  
    return (
        <div className="psychologistsCard">
            {props.psychologists && props.psychologists.map((doctor, i)=> {
            return <div className="eachProfile" key={i}> 
            <img className="profile_pic" src={doctor.image} alt="profile_pic"/>
            <p className='psychoName'>{doctor.first_name} {doctor.last_name} </p>
            <div className='underLine'></div>
            <p className='psychoDescription'>{doctor.description}</p>
            {props.authenticated && <div className='likeTogle'><button id='like' 
            onClick={() => handleLike(doctor)}>Like</button></div>}
            </div>;
            })}
        </div>
    );
};

//<button id="like" className={this.props.isLiked ? "liked" : ""} onClick={this.handleLike}>Like</button>
const mapStateToProps = state => {
    return {
        authenticated: state.loginReducer.authenticated
    };
};

export default connect(mapStateToProps)(Psychologists);