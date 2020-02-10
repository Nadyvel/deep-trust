import React from 'react';
import {connect} from 'react-redux';
import './FavouritePsychologistCard.css';
import {Link, withRouter} from 'react-router-dom';

const FavoritePsychologistCard = (props) => {
    console.log('favourite psychologist card', props);

        return (
        <div className='favourite-psychologist-card'>
            <Link to={{pathname: `/userprofile/psychologist/${props.psychologist.id}`, psychologist: props.psychologist}} style={{textDecoration: 'none',}} psychologist={props.psychologist}>
            <h3 className="psychologist_link">{props.psychologist.first_name} {props.psychologist.last_name}</h3>
            <img className='psychologist-image' src={props.psychologist.image} alt="psychologist-image" />
            </Link>
        </div>
        );
};

const mapStateToProps = state => {
    return {
        favoritePsychologists: state.userReducer.favoritePsychologist,
    };
};

export default connect(mapStateToProps)(withRouter(FavoritePsychologistCard));
