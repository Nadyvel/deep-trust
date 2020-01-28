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
import Registration from './components/Registration/Registration';
import LandingPage from './components/LandingPage/LandingPage';
import Test from './components/Test/Test';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path='/registration' component={Registration}/>
                    <Route exact path='/verification' component={Verification}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/test' component={Test}/>
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