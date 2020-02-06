import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import LandingPage from './components/LandingPage/LandingPage';
import DoctorLandingPage from './components/DoctorLandingPage/DoctorLandingPage';
import VideoChat from './components/TwilioVideo/VideoChat';
import Verification from './components/Verification/Verification';
import DoctorVerification from './components/DoctorVerification/DoctorVerification';
import UserProfile from "./components/UserProfile/UserProfile";
import PsychologistsList from './components/PsychologistsList/PsychologistsList';
import PsychologistProfile from './components/PsychologistProfile/PsychologistProfile'


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/doctorLandingPage' component={DoctorLandingPage}/>
                    <Route exact path='/verification' component={Verification}/>
                    <Route exact path='/doctorVerification' component={DoctorVerification}/>
                    <Route exact path='/video' component={VideoChat} />
                    <Route path='/userprofile' component={UserProfile}/>
                    <Route exact path='/doctorList' component={PsychologistsList}/>
                    <Route exact path='/psychologist/me' component={PsychologistProfile} />
                </Switch>
            </App>
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();