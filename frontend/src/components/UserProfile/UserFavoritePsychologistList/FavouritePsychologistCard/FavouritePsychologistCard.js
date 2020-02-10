import React from 'react';
import {connect} from 'react-redux';
import './FavouritePsychologistCard.css';
import {Link, withRouter} from 'react-router-dom';

const FavoritePsychologistCard = (props) => {

        return (
        <div className='favourite-psychologist-card'>
            <Link to={`/psychologists/${props.psychologist.id}`}><h3>{props.psychologist.first_name} {props.psychologist.last_name}</h3></Link>
            <img className='psychologist-image' src={props.psychologist.image} alt="psychologist-image" />
        </div>
        );
};

const mapStateToProps = state => {
    return {
        favoritePsychologists: state.userReducer.favoritePsychologist,
    };
};

export default connect(mapStateToProps)(withRouter(FavoritePsychologistCard));
