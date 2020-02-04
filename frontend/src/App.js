import React from 'react';
import './App.css';
import { connect } from 'react-redux';
//import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header";

const App = (props) => {
  
  return (
      <div className='pageDisplay'>
        <div className='headerDiv'>
          <Header/>
        </div>
        <div>
          {props.children} 
        </div>
        {/* <Footer/> */}
      </div>
)};

export default connect()(App);
