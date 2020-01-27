import React from 'react';
import './App.css';
import { connect } from 'react-redux';


const App = (props) => {
  
  return (
      <div>
        
        {props.children} 
        
      </div>
)};

export default connect()(App);
