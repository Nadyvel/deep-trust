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


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path='/' component={LandingPage}/>
                    <Route exact path='/doctorLandingPage' component={DoctorLandingPage}/>
                </Switch>
            </App>
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();