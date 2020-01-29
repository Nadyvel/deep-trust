import React, {useEffect} from "react";
import {connect} from "react-redux";
import {psychologistsAction} from '../../store/action/psychologistsAction';
import simpleParallax from 'simple-parallax-js'
//import background from "./Images/background.jpg";
import './LandingPage.css';


const LandingPage = (props) => {
    useEffect(() => {
        props.dispatch(psychologistsAction())
    }, []);

    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image, {
        scale: 22
    });

   
    return (
        <div className='landingPage'>
          {/* <img className="thumbnail" src={background} alt="image" /> */}
          {/* <div className="parallax-window" data-parallax="scroll" data-image-src={background}></div> */}
          <p>Landing page</p>
        </div>    
    )
}

const mapStateToProps = state => {
    //console.log('mapStateToProps:', state)
    return {
        psychologists: state.psychologistsReducer.psychologists
    };
};

export default connect(mapStateToProps)(LandingPage);

//about
//list of psicologies(best rated)
