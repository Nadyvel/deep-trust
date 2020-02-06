import React, {useState} from "react";
import {connect} from "react-redux";
import {psychologistsAction} from '../../store/action/psychologistsAction';
import './PsychologistsList.css';
import {useEffect} from "react";
import Header from "../Header/Header";
import Psychologists from '../Psychologists/Psychologists';

const PsychologistsList = (props) => {
    const headerTest = 'test header';
    return (
        <>
            <Header />
            <div className='psychologistsContainer'>
                <div className='titles'>
                    <p className='psychoList'>People you can trust</p>
                    <p className='psychodescrip'>The smartest people work every day to provide  the</p>
                    <p className='psychodescrip'>greatest support to you</p>
                </div>
                <Psychologists psychologists={props.psychologists}/>
            </div>
        </>
    );

};

const mapStateToProps = state => {
    return {
        psychologists: state.psychologistsReducer.psychologists
    };
};

export default connect(mapStateToProps)(PsychologistsList);