import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './UserFavouritePsychologistList.css';
import {withRouter} from 'react-router-dom';
import FavouritePsychologistCard from './FavouritePsychologistCard/FavouritePsychologistCard';

const UserFavouritePsychologistList = (props) => {
    console.log('user favorite psychologists list', props)

        return (
            <>
            <h1 className='favourite-psychologist-title'>My favourite psychologists</h1>
                <div className='user-favorite-psychologist-list'>
                    {props.favoritePsychologists.map((psychologist, index) => {
                        return <FavouritePsychologistCard key={index} psychologist={psychologist}/>
                    })
                    }
                </div>
            </>
        )
}

const mapStateToProps = state => {
    return {
        favoritePsychologists: state.userReducer.favoritePsychologist,
    }
}

export default connect(mapStateToProps)(withRouter(UserFavouritePsychologistList));
