import React, {useState} from "react";
import {connect} from "react-redux";
import {psychologistsAction} from '../../store/action/psychologistsAction';
import './PsychologistsList.css';
import {useEffect} from "react"
import Header from "../Header/Header";
import Psychologists from '../Psychologists/Psychologists'

const PsychologistsList = (props) => {
    const headerTest = 'test header'
    return (
        <>
            <div className='psychologistsContainer'>
                <Header />
                <p className='psychoList'>People you can trust</p>
                <Psychologists psychologists={props.psychologists}/>
            </div>
        </>
    )

}

const mapStateToProps = state => {
    return {
        psychologists: state.psychologistsReducer.psychologists
    };
};

export default connect(mapStateToProps)(PsychologistsList);