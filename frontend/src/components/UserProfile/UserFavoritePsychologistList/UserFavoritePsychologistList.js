import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './UserFavoritePsychologistList.css';
import {withRouter} from 'react-router-dom';
import FavouritePsychologistCard from './FavouritePsychologistCard/FavouritePsychologistCard';

const UserFavoritePsychologistList = (props) => {
    console.log('user favorite psychologists list', props)

        return (
        <div className='user-favorite-psychologist-list'>
             <div className='bold'>My favourite psychologists</div>
                {props.favoritePsychologists.map((psychologist, index) => {
                    return <FavouritePsychologistCard key={index} psychologist={psychologist}/>
                })
                }
            </div>
        )
}

const mapStateToProps = state => {
console.log('s', state)
    return {
        favoritePsychologists: state.userReducer.favoritePsychologist,
    }
}

export default connect(mapStateToProps)(withRouter(UserFavoritePsychologistList));
