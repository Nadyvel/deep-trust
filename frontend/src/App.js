import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Footer from "./components/Footer/Footer";

const App = (props) => {
  
  return (
      <div className='pageDisplay'>
        <div>
          {props.children} 
        </div>
        <Footer/>
      </div>
  );
};

export default connect()(App);
