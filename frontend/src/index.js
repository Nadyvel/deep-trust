import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/Login/Login';
import Verification from './components/Verification/Verification';
import DoctorVerification from './components/DoctorVerification/DoctorVerification';
import Registration from './components/Registration/Registration';
import LandingPage from './components/LandingPage/LandingPage';
import PreRegistration from './components/PreRegistration/PreRegistration';
import DoctorRegistration from './components/DoctorRegistration/DoctorRegistration';
import DoctorLandingPage from './components/DoctorLandingPage/DoctorLandingPage';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    {/* <Route exact path='/preregistration' component={PreRegistration}/>
                    <Route exact path='/registration' component={Registration}/>
                    <Route exact path='/doctorRegistration' component={DoctorRegistration}/>
                    <Route exact path='/verification' component={Verification}/>
                    <Route exact path='doctorVerification' component={DoctorVerification}/>
                    <Route exact path='/login' component={Login}/> */}


                    <Route path='/' component={LandingPage}/>
                    <Route exact path='/doctorLandingPage' component={DoctorLandingPage}/>
                </Switch>
            </App>
        </Router>
    </Provider>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();