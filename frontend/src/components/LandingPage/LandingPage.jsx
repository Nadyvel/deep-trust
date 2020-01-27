import React, {useEffect} from "react";
//import RestaurantCard from "../RestaurantCard/RestaurantCard";
import {connect} from "react-redux";
import {aboutAction} from '../../store/action/aboutAction';

const LandingPage = (props) => {

    useEffect(() => {
        props.dispatch(aboutAction())
    }, []);

    return (
        <div>
          
        </div>    
    )
}

const mapStateToProps = state => {
    console.log('mapStateToProps:', state)
    return {
        //restaurants: state.restaurantReducer.restaurants
    };
};

export default connect(mapStateToProps)(LandingPage);

//about
//list of psicologies(best rated)
