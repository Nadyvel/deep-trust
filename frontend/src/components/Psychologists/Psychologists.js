import React from "react";
import {connect} from "react-redux";
import "./Psychologists.css";

const Psychologists = props => {
   
    return (
        <div className="psychologistsCard">
            {props.psychologists && props.psychologists.map((doctor, i)=> {
            return <div className="eachProfile" key={i}> 
            <img className="profile_pic" src={doctor.image} alt="profile_pic"/>
            <p className='psychoName'>{doctor.first_name} {doctor.last_name} </p>
            <div className='underLine'></div>
            <p className='psychoDescription'>{doctor.description}</p></div> 
            })}
        </div>
    );
};


export default connect()(Psychologists);